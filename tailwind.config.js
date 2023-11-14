/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#ff7e01',
        secondary:'#faa935',
        heading:'#0b2727',
        text:'#6e7074'
      }
    },
  },
  plugins: [],
}