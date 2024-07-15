/** @type {import('tailwindcss').Config} */

const {fontFamily} = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",//"#1b1b1b",
        light: "#FEFAE0", //"#f5f5f5",
        cream: "#FEFAE0",
        darkGreen: "#283618",
        lightGreen: "#597835",
        mediumBrown: "#BC6C25",
        lightBrown:  "#DDA15E",
        lightBlue:  "#CBEEF3",
        mediumBlue: "#5DB7C1"
        },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(#5DB7C1 2px, #0000 5px 100px);'
      }  
    },
  },
  plugins: [],
};
