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
        "base-800": "#c17627",
        "base-400": "#f19431",
        "base-100": "#f5d662",
      },
    },
    plugins: [],
  },
};
