/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  darkMode: 'class', // or false  or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ['poppins', 'Helvetica', 'Arial', 'sans-serif'],
        secondary: ['proxima-nova', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
