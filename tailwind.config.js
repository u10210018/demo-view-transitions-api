/** @type {import('tailwindcss').Config} */
const { easings } = require('postcss-easings')

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  presets: [require('./src/vender/tailwindcss/project-preset.js')],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: 'calc(100% - 10vw)',
          margin: '0 auto',
          '@screen 2xl': {
            maxWidth: '1400px',
          },
        },
      })
    },
  ],
}
