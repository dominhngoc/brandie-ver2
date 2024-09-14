/** @type {import('tailwindcss').Config} */
const { addIconSelectors  } = require('@iconify/tailwind');

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx,css}',
  ],
  plugins: [
    // Iconify plugin, requires writing list of icon sets to load
    addIconSelectors(['mdi', 'mdi-light']),
],
  theme: {
    extend: {
      colors: {
        'green-100':'#F2F9F2',
        'green-300': '#028901',
        'blue-100':'#0057FF',
        'gray-100': '#f5f8ff',
        'gray-200': '#dee8ff'
      },
      backgroundImage: {
        'primary': "url('/assets/images/bg.jpg')",
      }
    },
  },
  plugins: [],
}

