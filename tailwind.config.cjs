/** @type {import('tailwindcss').Config} */
import * as tokens from 'tertle-design-tokens';
console.log(tokens);

module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  darkMode: 'class', // false | 'class' | 'media'
  theme: {
    colors: {
      ...tokens.colors,
      green: {
        DEFAULT: tokens.colors.primary.DEFAULT,
        light: tokens.colors.primary.light,
        dark: tokens.colors.primary.light,
      },
      orange: {
        DEFAULT: '#C97C00',
        light: '#C97C00',
        dark: '#FF5C28',
      },
      red: {
        DEFAULT: '#BC2929',
        light: '#BC2929',
        dark: '#EC3D3D',
      },
      transparent: 'transparent',
    },
    extend: {
      fontFamily: {
        primary: ['poppins', 'Helvetica', 'Arial', 'sans-serif'],
        secondary: ['proxima-nova', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
