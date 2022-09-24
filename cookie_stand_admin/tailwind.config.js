/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'darkgreen': '#15b981',
      'limegreen': '#6fe6b7',
      'teal': '#9af4c5',
      'black': '#000000' ,
      'white': '#FFFFFF',
    },
    extend: {},
  },
  plugins: [],
}
