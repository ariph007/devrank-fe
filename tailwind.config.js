/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // './pages/**/*.{js,ts,jsx,tsx}',
    // './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins'],
    },
    extend: {
      colors: {
        bodyBackground: '#f4f4f4',
        primary: '#16ABF8',
        danger: '#ED4C5C',
        txtBlack: '#111111',
        txtWhite: '#ffffff',
        txtGray: '#888888',
      },
    },
  },
  plugins: [],
}
