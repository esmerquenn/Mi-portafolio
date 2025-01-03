/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        neon: ["NeonGratisk"],
        warpen: ["Warpen"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        sm: "540px",
        md: "765px",
        lg: "992px",
        xl: "1140px",
      },
      colors: {
        white: "#F7F7F7",
        krem: "#EEE5C8",
        darkKrem: "#CFBE9B",
        lightGreen: "#8FBC8B",
        middleGreen: "#234829",
        olivegreen: "#7C7752",
        brown: "#3F332B",
        darkBrown: "#2f1403",
        darkGreen: "#001514",
        darkRed: "#fefefe",
        redy: "#98323B",
        red: "#DB2B30",
      },
    },
  },
  plugins: [],
};
