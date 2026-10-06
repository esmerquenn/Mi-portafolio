/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Tight"', "Inter", "system-ui", "sans-serif"],
      },
      screens: {
        sm: "540px",
        md: "765px",
        lg: "992px",
        xl: "1140px",
        xl2: "1240px",
      },
      colors: {
        ink: "#0F1B2D",
        night: "#0A1322",
        muted: "#8A94A6",
        soft: "#F4F6F9",
        line: "rgba(15, 27, 45, 0.12)",
        accent: "#059669",
        accentDark: "#047857",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.76, 0, 0.24, 1)",
      },
    },
  },
  plugins: [],
};
