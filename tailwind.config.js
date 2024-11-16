/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "320px",
      sm: "425px",
      md: "768px",
      lg: "1026px",
      xl: "1440px",
    },
    fontFamily: {
      primary: "Poppins",
    },

    extend: {
      colors: {
        primary: "white",
        // primary: "#FC6A43",
        light: "#F6F6F7",
        secondary: "#5B5B5B",
      },
      backgroundColor: {
        // primary: "#000",
        primary: "#ff5733",
        light: "#F6F6F7",
        secondary: "#ffc300",
      },
    },
  },
  plugins: [],
};
