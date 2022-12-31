/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')
const { parseColor } = require('tailwindcss/lib/util/color')
const toRGB = (value) => parseColor(value).color.join(' ')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        primary: 'rgb(var(--color-primary))',
        default: 'rgb(var(--color-default))',
      },
    },
  },
  plugins: [
    '@tailwindcss/forms',
    plugin(function ({ addBase }) {
      addBase({
        ':root': {
          '--color-default': toRGB(colors.slate[800]),
          '--color-primary': toRGB(colors.teal[400]),
        },
        '@media (prefers-color-scheme: dark)': {
          ':root': {
            '--color-default': toRGB(colors.slate[800]),
            '--color-primary': toRGB(colors.teal[400]),
          },
        },
      })
    }),
  ],
}
