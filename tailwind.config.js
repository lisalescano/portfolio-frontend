/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            50: '#f3faf4',
            100: '#e3f4e6',
            200: '#c4e7c9',
            300: '#9fd7a8',
            400: '#6fbe7c',
            500: '#49a45b',
            600: '#38854a',
            700: '#2e6a3d',
            800: '#255433',
            900: '#1e462b',
          },
          orange: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12',
          },
          brown: {
            50: '#f8f5f2',
            100: '#f1ebe3',
            200: '#e3d6c6',
            300: '#cfb89c',
            400: '#b7926d',
            500: '#9a6f47',
            600: '#7d5737',
            700: '#66452e',
            800: '#523726',
            900: '#422e21',
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
