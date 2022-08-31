/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      width: {
        '35%': '35%',
        '90%': '90%'
      },
      height: {
        '128': '32rem',
      }
    },
    colors: {
      white: '#ffffff',
      primary: '#d9dad4',
      secondary: '#2a313b',
      tertiary: '#128C7E'
    },
  },
  plugins: [],
}
