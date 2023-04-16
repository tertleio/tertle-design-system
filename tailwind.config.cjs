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
      primary: {
        DEFAULT: '#4D783F',
        light: '#4D783F',
        dark: '#0DFF0D',
      },
      orange: {
        DEFAULT: '#C97C00',
        light: '#C97C00',
        dark: '#FBA00D',
      },
      red: {
        DEFAULT: '#BC2929',
        light: '#BC2929',
        dark: '#EC3D3D',
      },
      transparent: 'transparent',
    },
    extend: {
      animation: {
        spin: 'spin 0.3s linear infinite',
      },
      fontFamily: {
        primary: ['poppins', 'Helvetica', 'Arial', 'sans-serif'],
        secondary: ['proxima-nova', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
