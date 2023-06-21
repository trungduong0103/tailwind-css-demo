/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "pp-orange": "#EA580C",
      "pp-orange-hover": "#D14E0B",
      "pp-navy-blue": "#001B3A",
      "pp-navy-blue-hover": "#000E1F",
      "surface-0": "#FFFFFF",
      "surface-1": "#F8F8FC",
      "surface-2": "#EFF2F6",
      "surface-3": "#EAEDF3",
      "white-1": "#FFFFFF",
      "black-1": "#000000",
      // dynamic
      primary: "rgb(var(--color-primary))",
    },
  },
  plugins: [],
};
