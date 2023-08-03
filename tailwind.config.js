/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        gradient_center:
          "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500",
        gradient_radial_right:
          "bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500",
        bgFooter:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.5) -368.17%, rgba(255, 255, 255, 0.21) -239%)",
        bgSection:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.21) -129.17%)",
      },
    },
  },
  plugins: [],
};
