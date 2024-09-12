/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      screens: {
        sm: "540px",
        md: "765px",
        lg: "992px",
        xl: "1140px",
      },
    },
  },
  plugins: [],
};
