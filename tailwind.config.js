/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "601px",   // tablet ≥601px
      md: "1025px",  // desktop ≥1025px
    },
    extend: {
      colors: {
        brand: { 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca" },
      },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,.06)" },
    },
  },
  plugins: [],
};
