/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      colors: {
        softBlue: "hsl(231,69%,60%)",
        softRed: "hsl(0,94%,66%)",
        grayisBlue: "hsl(229,8%,60%)",
        verydarktBlue: "hsl(229,31%,21%)",
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      
    },
  },
  plugins: [],
};
