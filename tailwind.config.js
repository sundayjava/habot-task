/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#072F57",
        secondary: "#00732F",
        accent: "#EB7150",
        deem: "#E8FBFF",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
     
    },
  },
  plugins: [],
};
