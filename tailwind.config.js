/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1200px",
      xl: "1440px",
    },
    extend: {
      colors: {
        myBlue: "#0206A4",
        myPink: "#FB0360",
      },
      backgroundImage: (theme) => ({
        pattern:
          "url('https://i.pinimg.com/736x/79/3d/f7/793df797732aaf145a0f8a40d7e92cc1.jpg')",
      }),
    },
  },
  plugins: [],
};

