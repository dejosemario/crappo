/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    color: {
      blue: {
        900: '#0D0D2B',
        600: '#2B076E',
        500: '#491F98',
        400: '#35068C',
        300: '#4610AD',
        100: '#3671E9',
        10: '#E0E0E0',
      },
      grey: '#828282'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '0',
        lg: '0',
        xl: '0',
        '2xl': '0',
      },
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1260px',
      },
    },
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1200px',
      '2xl': '1440px',
    },

    extend: {},
  },
  plugins: [],
}


