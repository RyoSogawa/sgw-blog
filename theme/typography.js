module.exports = theme => ({
  DEFAULT: {
    css: {
      color: theme('colors.text'),
      a: {
        color: theme('colors.blue.300'),
        '&:hover': {
          color: theme('colors.blue.200'),
        },
      },
      h1: {
        color: theme('colors.white'),
      },
      h2: {
        color: theme('colors.white'),
      },
      h3: {
        color: theme('colors.white'),
      },
      h4: {
        color: theme('colors.white'),
      },
      h5: {
        color: theme('colors.white'),
      },
      h6: {
        color: theme('colors.white'),
      },
      th: {
        color: theme('colors.gray.200'),
      },
      strong: {
        color: theme('colors.gray.200'),
      },
      code: {
        color: theme('colors.gray.200'),
        backgroundColor: theme('colors.gray.800'),
        borderRadius: '2px',
      },
      figcaption: {
        color: theme('colors.text'),
      },
      blockquote: {
        color: theme('colors.text'),
      },
      img: {
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  },
})
