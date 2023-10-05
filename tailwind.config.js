/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgLight: '#F7F8FD',
        primary: '#311996',
      },
      width: {
        maxWidth: '1440px',
        contentWidth: '1238px',
      },
      maxWidth: {
        pcWidth: '1320px',
        tabletWidth: '408px',
        mobileWidth: '300px',
      },
      fontFamily: {
        montserrat: 'Montserrat, sans-serif',
        rubik: 'Rubik, sans-serif',
      },
    },
  },
  plugins: [],
}
