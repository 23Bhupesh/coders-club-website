import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY as string;
const CONVERTKIT_API_SECRET = process.env.CONVERTKIT_API_SECRET as string;
const CONVERTKIT_API_URL = 'https://api.convertkit.com/v3';

export default async function unsubscribeHandler(req: NextApiRequest, res: NextApiResponse) {
  if (!CONVERTKIT_API_SECRET) {
    console.error('ConvertKit API secret is not configured');
    return res.status(500).json({
      error: 'Server configuration error',
      details: 'API secret is not configured'
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email }: { email?: string } = req.body;
    console.log("email", email);
    
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // First try to cancel using the API key (for forms)
    try {
      await axios.post(`${CONVERTKIT_API_URL}/unsubscribe`, {
        api_key: CONVERTKIT_API_KEY,
        email: email
      });

      return res.status(200).json({
        success: true,
        message: 'Successfully unsubscribed from newsletter'
      });
    } catch (formUnsubError) {
      console.log('Form unsubscribe failed, trying subscriber lookup...');
    }

    // If that fails, try the subscriber lookup method
    const searchResponse = await axios.get(`${CONVERTKIT_API_URL}/subscribers`, {
      params: {
        api_secret: CONVERTKIT_API_SECRET,
        email_address: email,
      }
    });

    const subscriber = searchResponse.data.subscribers?.[0];

    if (!subscriber) {
      return res.status(404).json({ 
        error: 'Subscriber not found',
        details: 'No subscriber found with the provided email address'
      });
    }

    // Try both unsubscribe methods
    try {
      // Method 1: Using the subscriber ID
      await axios.put(`${CONVERTKIT_API_URL}/subscribers/${subscriber.id}/unsubscribe`, null, {
        params: { api_secret: CONVERTKIT_API_SECRET }
      });
    } catch (error) {
      // Method 2: Using the delete endpoint
      await axios.delete(`${CONVERTKIT_API_URL}/subscribers/${subscriber.id}`, {
        params: { api_secret: CONVERTKIT_API_SECRET }
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Successfully unsubscribed from newsletter'
    });

  } catch (error: any) {
    console.error('Newsletter unsubscribe error:', error.response?.data || error.message);

    if (error.response?.status === 401) {
      return res.status(401).json({
        error: 'Authorization Failed',
        details: 'Invalid API credentials. Please check your ConvertKit API secret.'
      });
    }

    if (error.response?.data?.error) {
      return res.status(400).json({
        error: error.response.data.error,
        details: error.response.data.message || 'No additional details provided'
      });
    }

    return res.status(500).json({
      error: 'Error unsubscribing from newsletter',
      details: error.message || 'An unexpected error occurred'
    });
  }
}