// pages/api/subscribe.ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY as string;
const CONVERTKIT_API_SECRET = process.env.CONVERTKIT_API_SECRET as string;
const FORM_ID = process.env.CONVERTKIT_FORM_ID as string;
const CONVERTKIT_BASE_URL = 'https://api.convertkit.com/v3';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email }: { email?: string } = req.body;
    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // First, check if subscriber exists
    const checkSubscriberUrl = `${CONVERTKIT_BASE_URL}/subscribers?api_secret=${CONVERTKIT_API_SECRET}&email_address=${email}`;
    const subscriberCheck = await axios.get(checkSubscriberUrl);
    const existingSubscriber = subscriberCheck.data.subscribers?.[0];

    let response;

    if (existingSubscriber && existingSubscriber.state === 'cancelled') {
      // If subscriber exists and is cancelled, use resubscribe endpoint
      const resubscribeUrl = `${CONVERTKIT_BASE_URL}/forms/${FORM_ID}/resubscribe`;
      response = await axios.post(resubscribeUrl, {
        api_key: CONVERTKIT_API_KEY,
        email,
      });
    } else if (!existingSubscriber) {
      // If subscriber doesn't exist, use regular subscribe endpoint
      const subscribeUrl = `${CONVERTKIT_BASE_URL}/forms/${FORM_ID}/subscribe`;
      response = await axios.post(subscribeUrl, {
        api_key: CONVERTKIT_API_KEY,
        email,
      });
    } else {
      // If subscriber exists and is active
      return res.status(200).json({
        success: true,
        message: 'Already subscribed to newsletter',
        subscriber: existingSubscriber,
      });
    }
    
    return res.status(200).json({
      success: true,
      message: 'Successfully subscribed to newsletter',
      subscriber: response?.data?.subscription || response?.data,
    });

  } catch (error: any) {
    console.error('Newsletter subscription error:', error.response?.data || error);

    // Handle ConvertKit specific errors
    if (error.response?.data?.error) {
      return res.status(400).json({ error: error.response.data.error });
    }

    return res.status(500).json({
      error: 'Error subscribing to newsletter',
    });
  }
}
