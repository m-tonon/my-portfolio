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
        "my-purple-800": "#5A1D7A",
        "my-purple-400": "#B85EE6",
        "my-purple-100": "#CA86EC",
      },
    },
    plugins: [],
  },
};
