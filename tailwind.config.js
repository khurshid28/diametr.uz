/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00C48C",
        secondary: "rgba(0, 196, 140, 0.12)",
        textColor: "#1A202C",
        textGrey: "#718096",
        primary_gr: "rgba(0, 196, 140, 0.75)",
        accent: "#00E6A1", // Och yashil accent
        dark: "#0F172A", // To'q matn uchun
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: "false",
};
