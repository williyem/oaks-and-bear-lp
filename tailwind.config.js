/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111827",
        secondary: "#005358",
        primaryBlack: "#1A232E",
        primaryTextColor: "#14B8A6",
        secondaryTextColor: "#99F6E4",
      },
    },
  },
  plugins: [],
};
