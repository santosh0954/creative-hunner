/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      keyframes: {
        fadeDown: {
          from: {
            opacity: 0,
            height: "0px",
          },
          to: {
            opacity: 1,
            height: "86px",
          },
        },
      },
      animation: {
        fadeDown: "fadeDown 1s ease",
      },
    },
  },
  plugins: [],
};
