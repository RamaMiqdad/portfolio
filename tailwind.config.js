/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode:'class',
  theme: {
    container:{
      center :true,
      padding :'16px',
    },
    extend: {
      colors:{
        moon:'#111827',
        dark:'#0a0a0a',
        light:'#fafafa',
      },
      screens: {
        '2xl' :'1320px',
      }
    },
  },
  plugins: [],
}

