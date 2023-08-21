/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cornsilk: {
          "100": "#fffbe2",
          "200": "rgba(255, 251, 226, 0.88)",
          "300": "rgba(255, 251, 226, 0.5)",
        },
        chocolate: "#e86f26",
        lightgoldenrodyellow: "rgba(255, 249, 211, 0.7)",
        black: "#000",
        white: "#fff",
        gray: {
          "100": "#8e8e8e",
          "200": "rgba(255, 255, 255, 0.7)",
        },
        gainsboro: "#dedede",
        darkslategray: "#044332",
      },
      fontFamily: {
        "palatino-linotype": "'Palatino Linotype'",
        "be-vietnam-pro": "'Be Vietnam Pro'",
      },
      borderRadius: {
        sm: "14px",
        "10xs": "3px",
        "16xl": "35px",
      },
    },
    fontSize: {
      "5xl": "1.5rem",
      "25xl": "2.75rem",
      xl: "1.25rem",
      "11xl": "1.88rem",
      "13xl": "2rem",
      "59xl": "4.88rem",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
