/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors:{
        'aman': '#01ee91',
        'primary': '#3238f2'
      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

