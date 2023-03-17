/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#2E3454",
      primaryV2: "#384062",
      secondary: "#F75F4E",
      white: "#fff",
      black: "#000",
    },
    extend: {},
  },
  plugins: [],
};
