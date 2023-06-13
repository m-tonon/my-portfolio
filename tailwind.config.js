/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,scss,ts}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "base-800": "#207194",
        "base-400": "#36BCF7",
        "base-100": "#72d0f9",
      },
    },
    plugins: [],
  },
};
