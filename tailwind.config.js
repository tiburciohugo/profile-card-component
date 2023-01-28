/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "medium-gray": "6B7082",
      },
      backgroundImage: {
        "mobile" : "url('/Mobile.svg')",
        "desktop" : "url('/Desktop.svg')",
      }
    },
  },
  plugins: [],
};
