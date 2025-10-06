/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    screens: {
      // base: ≤600px (móvil)
      sm: "601px",   // tablet (≥601px)
      md: "1025px",  // desktop (≥1025px)
    },
    extend: {
      colors: {
        brand: {
          500: "#6366f1",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
}
