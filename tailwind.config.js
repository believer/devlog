const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './*.njk',
    './_includes/*.njk',
    './*.11ty.js',
    './pages/*.md',
    './journals/*.md',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        rose: colors.rose,
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
