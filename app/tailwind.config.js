/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "azul-clarinho": "#6583e6",
        "verde-clarinho": "#A0E64E",
        "salmao-clarinho": "#E6927C",
      },
    },
  },
  plugins: [],
};
