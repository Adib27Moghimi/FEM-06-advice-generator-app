/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: {
            light: "hsl(193, 38%, 86%)",
          },
          green: {
            neon: " hsl(150, 100%, 66%)",
          },
        },
        neutral: {
          blue: {
            grayish: {
              DEFAULT: " hsl(217, 19%, 38%)",
              dark: "hsl(217, 19%, 24%)",
            },
            dark: "hsl(218, 23%, 16%)",
          },
        },
      },
      screens: {
        max375: { max: "375px" },
        mobile2: "375px",
        laptop: "1024px",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      fontSize: {
        optical: "auto",
      },
      fontWeight: {
        800: "800",
      },
    },
  },
  plugins: [],
};
