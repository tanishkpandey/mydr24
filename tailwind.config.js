/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#000000',   // Black 1 (default black)
          100: '#383838',       // Black 2
          200: '#929292',       // Black 3
          300: '#B7B7B7',       // Black 4
        },
      },
    },
  },
  plugins: [],
}