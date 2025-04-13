/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins,serif",
      },
      screens: {
        sm: "540px",
        md: "765px",
        lg: "992px",
        xl: "1140px",
        xl2: "1240px"
      },
      colors: {
        white: "#F5EEE6",
        black:"#131313",
        krem: "#EEE5C8",
        darkKrem: "#f7f7f7",
        lightGreen: "#8FBC8B",
        middleGreen: "#234829",
        olivegreen: "#7C7752",
        brown: "#3F332B",
        mybrown: "#2E2827",
        darkBrown: "#2f0d03",
        darkGreen: "#001514",
        darkRed: "#fefefe",
        redy: "#98323B",
        red: "#DB2B30",
      },
    },
  },
  plugins: [],
};
