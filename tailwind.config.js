// const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ["Poppins", "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        // name: "#hex"
        // name: colors.gray["900"]
      },
      transitionDuration: {
        // name: "2000ms",
      },
      lineHeight: {
        // name: "5rem"
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      // space: ["hover", "focus"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // require("@tailwindcss/aspect-ratio")
  ],
};
