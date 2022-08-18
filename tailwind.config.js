/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require("./src/styles/configs/tw-framework-colors"),
    require("./src/styles/configs/tw-framework-base"),
  ],
  content: ["./src/**/*.{js,ts,jsx,tsx,astro}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};
