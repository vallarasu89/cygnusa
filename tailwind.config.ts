import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cygnusa: {
          sky: '#0EA5E9',       // Primary buttons, links, active states
          'sky-hover': '#0284C7', // Hover state
          'sky-light': '#F1F5F9', // Subtle neutral slate
          cosmic: '#0ea5e9',    // Headings and emphasis
          'cosmic-dark': '#172554',
          void: '#0F172A',      // Main typography & dark elements
          ether: '#F8FAFC',     // Neutral slate surface backgrounds
          mist: '#64748B',      // Secondary text
          'mist-light': '#94A3B8',
          green: '#10B981',     // Positive highlights & metrics
          surface: '#F8FAFC',
          border: '#E2E8F0',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 6px -1px rgba(15, 23, 42, 0.04), 0 2px 4px -2px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.04)',
        'mega-menu': '0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.05)',
      },
      maxWidth: {
        'site': '1320px',
      },
    },
  },
  plugins: [],
};

export default config;
