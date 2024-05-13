/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nvcol: {
          400: "#2C3E50",
        },
        webbut: {
          400: "#FFC107",
        },
        webbuthov: {
          400: "#FFE8A5",
        },
        webtext: {
          400: "#DAFFFB",
        },
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        monoDM: ["DM Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
