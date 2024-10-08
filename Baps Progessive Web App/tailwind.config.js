/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        playfair: "'Playfair Display', serif",
        lato: "'Lato', sans-serief",
        lilita: "'Lilita One', sans-serif",
      }
    },
  },
  plugins: [],
}