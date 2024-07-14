/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00C48C",
        secondary: "rgba(0, 196, 140, 0.25)",
        textColor: "#002966",
        textGrey: "#667085",
        primary_gr:"rgba(0, 194, 139, 0.68)"
      },
      
    },
  },
  plugins: [require("daisyui")],
  darkMode: "false",
};
