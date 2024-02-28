/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primaryGreen: "#0AC572",
      primaryLightGray: "#575861",
      dustedGray: "#828285",
      grayBorder: "#D7D7D7",
      dustedGraySecondary: "#EDEEF2",
      white: "#FFFFFF",
      whiteGrayish: "#F2F3F6",
      primaryPurple: "#AA9CFF",
      primaryBlue: "#68B8DB",
    },
    screens: {
      sm: "500px",
      md: [{ min: "668px", max: "767px" }, { min: "868px" }],
      lg: "1100px",
      xl: "1400px",
    },
    extend: {},
  },
  plugins: [],
};
