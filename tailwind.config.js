/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "30px",
          lg: "0",
        },
      },
      backgroundImage: {
        "hero-bg": "url('./src/assets/hero-bg.jpg')",
        "mobile-bg": "url('./src/assets/hero.jpg')",
      },
    },
  },
  plugins: [],
};
