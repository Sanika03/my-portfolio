/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ultra-red": "#EF798A",
        "cream": "#FFF8E7",
        "blue-purple": "#7D82BB",
        "grape": "#613F75",
        "queen-pink": "#E5C3D1"
      }
    },
  },
  plugins: [],
}