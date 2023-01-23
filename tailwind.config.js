/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        body: {
          DEFAULT: `hsl(250, 60%, 99%)`,
        },
        title: {
          DEFAULT: `hsl(250, 8%, 15%)`,
        },
        first: {
          DEFAULT: `hsl(250, 69%, 61%)`,
          100: `hsl(250, 57%, 53%)`,
        },
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        small: `.813rem`,
      },
    },
  },
  plugins: [],
};
