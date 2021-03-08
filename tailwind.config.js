// tailwind.config.js
const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    colors: colors,
    extend: {
      colors: {
        brand: {
          twitch: "#9146ff",
          twitter: "#1da1f2",
          github: "#24292e"
        }
      }
    }
  }
};
