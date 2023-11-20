/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,js}",
  ],
  theme: {
    extend: {
      colors: {
        'vermelho': '#ff0000',
        'vermelhoescuro': '#990000',
      }
    },
  },
  plugins: [],
}

