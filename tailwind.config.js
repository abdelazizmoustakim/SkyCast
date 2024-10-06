/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#39b7f1",
        secondary: "#f42c37",
        brandYellow: "#fdc62e",
        brandGreen: "#2dcc6f",
        brandBlue: "#1376f4",
        brandWhite: "#eeeeee",
        whitesmoke: "#f5f5f5"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "4rem",
        },
      },
    },
  },
  plugins: [],
};