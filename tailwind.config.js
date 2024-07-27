/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spacegrotesk: ["Space Grotesk", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        sourcecodepro: ["Source Code Pro", "monospace"],
      },
      colors: {
        dark: "rgba(0,0,0,1)",
      },
    },
  },
  plugins: [],
};
