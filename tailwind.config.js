const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        GintoNord: ["GintoNord", ...defaultTheme.fontFamily.sans],
        Whiteny: ["Whiteny", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
