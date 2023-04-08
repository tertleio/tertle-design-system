/** @type {import('tailwindcss').Config} */
import * as tokens from 'tertle-design-tokens';

module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  darkMode: 'class', // false | 'class' | 'media'
  theme: {
    colors: tokens.colors,
    extend: {
      fontFamily: {
        primary: ['poppins', 'Helvetica', 'Arial', 'sans-serif'],
        secondary: ['proxima-nova', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
