// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#010851",
        secondary: "#9A7AF1",
        teritary: "#707070",
        pink: "#EE9AE5",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      boxShadow: {
        '3xl':'0 35px 60px -15px rgba(0,0,0,0.15)',
      }
    },
  },
  plugins: [],
};
