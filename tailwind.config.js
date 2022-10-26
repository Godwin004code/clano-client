/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'sm': {'max': '639px'},
      'md': {'max': '767px'},
      'lg': {'max': '1000px'},
    }
  },
  plugins: [],
}
