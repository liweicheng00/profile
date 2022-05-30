const plugin = require('tailwindcss/plugin')
const flip = plugin(function ({ addUtilities }) {
  addUtilities({
    '.flip': {
      transform: 'rotateY(180deg)',
    },
    '.flip-move': {
      transform: 'rotateY(180deg)',
    }
  })
})
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('/img/E086B648-0D42-4816-96B4-34F259AEA8E4_1_201_a 1.png')"
      }
    },
  },
  plugins: [flip],
}
