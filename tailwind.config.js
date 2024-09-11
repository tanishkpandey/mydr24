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
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
      fontSize: {
        'head': ['24px', '32px'],
        'subhead': ['18px', '28px'],
        'title': ['16px', '24px'],
      },
      boxShadow: {
        crousalShadow: '6px 4px 27px 0px #01B8061A',
        healthCheckupShadow: '0px 3.78px 3.78px 0px #0000001A',

      },
    },
  },
  plugins: [],
}