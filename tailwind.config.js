module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#42572E',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
        "bproduct" :"#f7f7f7"
       }),
    },
    fontFamily: {
      'display': ['Oswald'],
      'body': ['SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif'],
      'sspro': ['Source Sans Pro, sans-serif'],
      'khmer-chenla': ['Chenla, sans-serif'],
    },

  },
  variants: {
    extend: {
      float: ['hover', 'focus'],
      display: ['hover', 'focus'],
      gridTemplateColumns: ['hover', 'focus'],
      alignContent: ['hover', 'focus'],
      justifySelf: ['hover', 'focus'],
      justifyItems: ['hover', 'focus'],
      display: ['hover', 'focus'],
      borderRadius: ['hover', 'focus'],
      position: ['hover', 'focus'],
      alignSelf: ['hover', 'focus'],
      placeContent: ['hover', 'focus'],
      placeItems: ['hover', 'focus'],
      alignItems: ['hover', 'focus'],
      flexWrap: ['hover', 'focus'],
      fontFamily: ['hover', 'focus'],
      dropShadow: ['hover', 'focus'],

    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar-hide')
  ],
}
