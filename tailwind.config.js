module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        blue: '2px solid #0000ff',
      }, boxShadow: {
        box: '0 2px 5px 0 rgba(0,0,0,.25),0 3px 10px 0 rgba(0,0,0,.2)'
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
