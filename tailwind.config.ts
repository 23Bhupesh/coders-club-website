import type { Config } from "tailwindcss"
import { Lato, Poppins } from "next/font/google";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        'custom-bg': "url('/images/Background_Dusty_Texture.svg')",
        'mobile-bg': "url('/images/img_wall_mobile.svg')",
      },
      fontFamily: {
        lemonmilk: ['Lemon Milk', 'sans-serif'],
        inter:['Inter', 'sans-serif'],
        leckerli: ['Leckerli One', 'cursive'],
        lato: ['Lato', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        halfmoon: ['Halfmoon', 'sans-serif'],
        moshitomono: ['Moshito Mono', 'monospace'],
      },
      letterSpacing: {
        'extra-widest': '0.45em',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        'scroll': 'scroll 20s linear infinite',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scrollTopBottom": 'scrollTopBottom 20s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config