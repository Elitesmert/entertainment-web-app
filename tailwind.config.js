const {nextui} = require('@nextui-org/react')
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lightRed: 'rgb(252, 71, 71)',
        darkBlue: 'rgb(16, 20, 30)',
        greyishBlue: 'rgb(90, 105, 143)',
        semiDarkBlue: 'rgb(22, 29, 47)',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      fontSize: {
        xs: ['13px', '16.38px'],
        sm: ['15px', '18.9px'],
        base: ['18px', '22.68px'],
        lg: ['24px', '30.24px'],
        xl: ['32px', '40.32px'],
      },
      letterSpacing: {
        base: '-0.5px',
      },
      borderRadius: {
        20: '20px',
      },
      gridTemplateColumns: {
        'auto-fit-164': 'repeat(auto-fill, minmax(164px, 1fr))',
        'auto-fit-220': 'repeat(auto-fill, minmax(164px, 1fr))',
        'auto-fit-280': 'repeat(auto-fill, minmax(164px, 1fr))',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
