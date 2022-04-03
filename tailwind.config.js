module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,css}', './_posts/**/*.md'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: `'Noto Sans JP', sans-serif`,
      mono: `'JetBrains Mono', monospace`,
      inter: `'Inter', sans-serif`,
    },
    zIndex: require('./theme/zIndex'),
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
        },
      },
      colors: require('./theme/colors'),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-font-size'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1080px',
          },
        },
      })
    },
  ],
}
