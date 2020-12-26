module.exports = {
  darkMode: 'media',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.+(js|jsx)", "./pages/**/*.+(js|jsx)"],
  theme: {
    extend: {
      colors: {
        dark: "#24283b",
      },

      typography: (theme) => ({
        default: {
            css: {
                color: theme('colors.gray.900'),
                a: {
                    color: theme('colors.blue.700'),
                    '&:hover': {
                        color: theme('colors.blue.700'),
                    },
                },
            },
        },

        dark: {
            css: {
                color: theme('colors.gray.300'),
                a: {
                    color: theme('colors.green.500'),
                    '&:hover': {
                        color: theme('colors.green.500'),
                    },
                },

                h1: {
                    color: theme('colors.gray.300'),
                },
                h2: {
                    color: theme('colors.gray.300'),
                },
                h3: {
                    color: theme('colors.gray.300'),
                },
                h4: {
                    color: theme('colors.gray.300'),
                },
                h5: {
                    color: theme('colors.gray.300'),
                },
                h6: {
                    color: theme('colors.gray.300'),
                },

                strong: {
                    color: theme('colors.gray.300'),
                },

                code: {
                    color: theme('colors.gray.300'),
                },

                figcaption: {
                    color: theme('colors.gray.500'),
                },
            },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};
