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
          // Primary Brand Colors (30% / Main Identity)
          sky: '#0EA5E9',          // Primary brand identity, buttons, links, active states
          'sky-hover': '#0284C7',    // Interactive hover state
          'sky-light': '#F0F9FF',    // Ether White tint
          cosmic: '#1E3A8A',       // Cosmic Deep / Indigo for structure and depth
          'cosmic-deep': '#1E3A8A',// Official Cosmic Deep
          'cosmic-navy': '#0A1E4A',// Deep enterprise container background
          void: '#0F172A',         // Void Black: primary typography & dark sections
          
          // Secondary Neutrals & Surfaces (60%)
          ether: '#F0F9FF',        // Ether White: official neutral canvas (60%)
          'ether-slate': '#F8FAFC',// Secondary surface slate
          mist: '#64748B',         // Silver Mist: secondary text
          'mist-light': '#94A3B8',  // Muted metadata
          surface: '#FFFFFF',      // Pure white card surfaces
          border: '#E2E8F0',       // Subtle border
          
          // Secondary Semantic
          green: '#10B981',        // Abundance Green: success states, verification, SLAs
          
          // Complementary Palette (10% Single Accent per composition - Brand Guidelines Page 7)
          gold: '#F59E0B',         // Solar Gold: Important highlights, awards, alt CTAs
          violet: '#7C3AED',       // Crown Violet: Premium & enterprise, used sparingly
          cyan: '#06B6D4',         // Akasha Cyan: Data visualizations, charts, infographic accents
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
