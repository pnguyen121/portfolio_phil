/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {

      colors: {
        'purplephil': '#23172d',
        'pinkphil': '#653c55'
      },
      backgroundImage: {
        'hero-background': "url('/https://imgur.com/8csQzXk.png')",
      },
    },
  },
  plugins: [],
};
