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
       }),
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

    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
