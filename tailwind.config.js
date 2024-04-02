/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors: {
        'color-green': '#459E00',
        'color-green-dark': '#064600',
        'color-black': '#1A1A1A',
        'color-white': '#FDFDFD',
        'color-bg': '#459E006E',
      }
    },
    fontFamily: {
      'sansation': ['sansation', 'sans-serif'],
      'lato': ['lato', 'sans-serif']
    }
  },
  plugins: [],
}

