module.exports = {
  content: [
    "./resources/views/**/*.{html,js,hbs}",
    "./resources/js/**/*.{jsx,js,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        secondary: "rgba(124, 153, 5, 1)",
        dark: "#1e2136",
      },
      screens: {
        xs: "350px",
        sm: "640px",

        md: "768px",

        lg: "1024px",

        xl: "1280px",

        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
