/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        BlueDark: "#0c415c",
        BlueLight: "#32b9ec",
        BlueLighter: "#0878ab",
        BluePurple: "#8d80d5",
        White: "#e6f1ff",
        GrayWHite: "#f2f2f2",
      },
      screens:{
        'xs':'600px'
      }
    },
  },
  plugins: [],
  important: true,
};
