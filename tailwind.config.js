/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {

    extend: {

      colors: {

        /* Brand Colors */

        primary: '#000000',   // Black

        secondary: '#FFFFFF', // White

        accent: '#FFD600',    // Eureka Yellow


        /* Premium Brand Set */

        brand: {

          yellow: '#FFD600',

          black: '#000000',

          white: '#FFFFFF'

        },


        /* Neutral Grays */

        gray: {

          50: '#F9FAFB',

          100: '#F3F4F6',

          200: '#E5E7EB',

          300: '#D1D5DB',

          400: '#9CA3AF',

          500: '#6B7280',

          600: '#4B5563',

          700: '#374151',

          800: '#1F2937',

          900: '#111827',

        },

      },



      /*
      PREMIUM FONT SYSTEM
      */


      fontFamily: {

        /* Primary — Headlines */

        primary: ['Plus Jakarta Sans','sans-serif'],


        /* Secondary — Body Text */

        secondary: ['Manrope','sans-serif'],


        /* Tertiary — UI */

        tertiary: ['Inter','sans-serif'],


        /* Default */

        sans: ['Plus Jakarta Sans','sans-serif'],


        serif: ['Georgia','serif'],

      },



      spacing: {

        '128': '32rem',

        '144': '36rem',

      },

    },

  },

  plugins: [],

};
