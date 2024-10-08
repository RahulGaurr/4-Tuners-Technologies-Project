/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/Images/BG Hero.png')",
        'custom-gradient': 'linear-gradient(180deg, rgba(11, 29, 38, 0) 0%, #0B1D26 10%)',
        'custom-gradient2': 'linear-gradient(180deg, rgba(11, 29, 38, 0) 0%, #0B1D26 0%)',
      },
      colors: {
        'dark-blue': '#0B1D26', 
      },
    },
  },
  plugins: [],
};
