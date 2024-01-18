const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{vue,js,ts,jsx,tsx}",
//   ],
  content: [
    '/components/**/*.{vue,js,ts}'
  ],
  theme: {
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
    extend: {
      colors: {
        primary: 'rgb(78, 29, 121)',
        'bg-primary': 'rgb(18, 22, 40)',
      },
    },
    screens: {
      'xs': '380px',
      ...defaultTheme.screens,
      '3xl': '1920px'
    },
  },
  plugins: [],
  // Whitelisting some classes to avoid content purge
  safelist: [
    'whitelisted',
    {
      pattern: /bg-(red|green|blue)-(100|200|300)/,
    },
  ]
}