/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#081A2E", // Substitui o preto profundo por azul semelhante
        secondary: "#647A9E", // Substitui o cinza claro por azul claro
        tertiary: "#102542", // Substitui o tom roxo escuro por azul escuro
        "black-100": "#0A213A", // Substitui o preto suave por azul profundo
        "black-200": "#06182B", // Substitui o tom mais escuro por azul ainda mais intenso
        "white-100": "#D9E6F2", // Substitui o branco por um azul muito claro
      },
      boxShadow: {
        card: "0px 35px 120px -15px #003366", // Sombra em tom azul
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
