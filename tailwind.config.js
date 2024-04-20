/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      screens: {
        "sm": "480px"
      },
      spacing: {
        "big": "48rem"
      },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}}

