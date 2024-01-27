/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': [
          '1px 4px 0px rgb(0,0,0,0.5)',
        ],
        '4xl': [
          '1px 1px 0px rgb(0,0,0,0.5)',
        ],
      },
    },
  },
  plugins: [],
}