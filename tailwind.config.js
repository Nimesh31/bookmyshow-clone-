module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        navCol:{
          
  50: '#eef0fa',
  100: '#cfd2e2',
  200: '#b0b3cc',
  300: '#9095b8',
  400: '#7177a4',
  500: '#585d8c',
  600: '#44496d',
  700: '#31344e',
  800: '#1d1f30',
  900: '#090914',

        },

        darkCarousal:{
          50: '#eef0fa',
  100: '#cfd2e2',
  200: '#b0b3cc',
  300: '#9095b8',
  400: '#7177a4',
  500: '#585d8c',
  600: '#44496d',
  700: '#31344e',
  800: '#1d1f30',
  900: '#090914',
        }
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
