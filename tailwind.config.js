/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'salsa': ['Salsa', 'cursive'],
        'caveat': ['Caveat', 'cursive'],
      },
      fontWeight: {
        regular: 400,
      },
      fontStyle: {
        normal: 'normal',
      },
    },
  },
  plugins: [],
}

