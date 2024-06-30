/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff6436",
        complementary: "#36d1ff"
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
}