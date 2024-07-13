/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007AFF",
        secondary: "#A0AFC4",
      },
      boxShadow: {
        stat: "0px 4px 10px 0px #5050500D",
      },
    },
  },
  plugins: [],
};
