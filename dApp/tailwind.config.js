/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;
const svgToDataUri = require('mini-svg-data-uri');

// const { Theme, Color, BackgroundColor } = require('@adobe/leonardo-contrast-colors');

// console.log({ Theme, Color, BackgroundColor });

// function generateTheme() {
//   console.log({ Theme, Color, BackgroundColor });
//   const primary = '';
//   const secondary = '';
//   const tertiary = '';
//   const quaternary = '';
//   const quinary = '';

//   return [primary, secondary, tertiary, quaternary, quinary];
// }
// const theme = generateTheme();

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/forms/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontSize: {
      '4xs': '0.375rem', // 6px
      '3xs': '0.5rem', // 8px
      '2xs': '0.625rem', // 10px
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        layout: {
          primary: 'var(--color-layout-primary)',
          secondary: 'var(--color-layout-secondary)',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
        code: {
          highlight: 'rgb(125 211 252 / 0.1)',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.slate.700'),
            hr: {
              borderColor: theme('colors.slate.100'),
              marginTop: '3em',
              marginBottom: '3em',
            },
            'h1, h2, h3': {
              letterSpacing: '-0.025em',
            },
            h2: {
              marginBottom: `${16 / 24}em`,
            },
            h3: {
              marginTop: '2.4em',
              lineHeight: '1.4',
            },
            h4: {
              marginTop: '2em',
              fontSize: '1.125em',
            },
            'h2 small, h3 small, h4 small': {
              fontFamily: theme('fontFamily.mono').join(', '),
              color: theme('colors.slate.500'),
              fontWeight: 500,
            },
            'h2 small': {
              fontSize: theme('fontSize.lg')[0],
              ...theme('fontSize.lg')[1],
            },
            'h3 small': {
              fontSize: theme('fontSize.base')[0],
              ...theme('fontSize.base')[1],
            },
            'h4 small': {
              fontSize: theme('fontSize.sm')[0],
              ...theme('fontSize.sm')[1],
            },
            'h2, h3, h4': {
              'scroll-margin-top': 'var(--scroll-mt)',
            },
            'h2 code, h3 code': {
              font: 'inherit',
            },
            ul: {
              listStyleType: 'none',
              paddingLeft: 0,
            },
            'ul > li': {
              position: 'relative',
              paddingLeft: '1.75em',
            },
            'ul > li::before': {
              content: '""',
              width: '0.75em',
              height: '0.125em',
              position: 'absolute',
              top: 'calc(0.875em - 0.0625em)',
              left: 0,
              borderRadius: '999px',
              backgroundColor: theme('colors.slate.300'),
            },
            a: {
              fontWeight: theme('fontWeight.semibold'),
              textDecoration: 'none',
              borderBottom: `1px solid ${theme('colors.sky.300')}`,
            },
            'a:hover': {
              borderBottomWidth: '2px',
            },
            'a code': {
              color: 'inherit',
              fontWeight: 'inherit',
            },
            strong: {
              color: theme('colors.slate.900'),
              fontWeight: theme('fontWeight.semibold'),
            },
            'a strong': {
              color: 'inherit',
              fontWeight: 'inherit',
            },
            kbd: {
              background: theme('colors.slate.100'),
              borderWidth: '1px',
              borderColor: theme('colors.slate.200'),
              padding: '0.125em 0.25em',
              color: theme('colors.slate.700'),
              fontWeight: 500,
              fontSize: '0.875em',
              fontVariantLigatures: 'none',
              borderRadius: '4px',
              margin: '0 1px',
            },
            code: {
              fontWeight: theme('fontWeight.medium'),
              fontVariantLigatures: 'none',
            },
            pre: {
              color: theme('colors.slate.50'),
              borderRadius: theme('borderRadius.xl'),
              padding: theme('padding.5'),
              boxShadow: theme('boxShadow.md'),
              display: 'flex',
              marginTop: `${20 / 14}em`,
              marginBottom: `${32 / 14}em`,
            },
            'p + pre': {
              marginTop: `${-4 / 14}em`,
            },
            'pre + pre': {
              marginTop: `${-16 / 14}em`,
            },
            'pre code': {
              flex: 'none',
              minWidth: '100%',
            },
            table: {
              fontSize: theme('fontSize.sm')[0],
              lineHeight: theme('fontSize.sm')[1].lineHeight,
            },
            thead: {
              color: theme('colors.slate.700'),
              borderBottomColor: theme('colors.slate.200'),
            },
            'thead th': {
              paddingTop: 0,
              fontWeight: theme('fontWeight.semibold'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.slate.100'),
            },
            'tbody tr:last-child': {
              borderBottomWidth: '1px',
            },
            'tbody code': {
              fontSize: theme('fontSize.xs')[0],
            },
            'figure figcaption': {
              textAlign: 'center',
              fontStyle: 'italic',
            },
            'figure > figcaption': {
              marginTop: `${12 / 14}em`,
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.slate.400'),
            'h2, h3, h4, thead th': {
              color: theme('colors.slate.200'),
            },
            'h2 small, h3 small, h4 small': {
              color: theme('colors.slate.400'),
            },
            kbd: {
              background: theme('colors.slate.700'),
              borderColor: theme('colors.slate.600'),
              color: theme('colors.slate.200'),
            },
            code: {
              color: theme('colors.slate.200'),
            },
            hr: {
              borderColor: theme('colors.slate.200'),
              opacity: '0.05',
            },
            pre: {
              boxShadow: 'inset 0 0 0 1px rgb(255 255 255 / 0.1)',
            },
            a: {
              color: theme('colors.white'),
              borderBottomColor: theme('colors.sky.400'),
            },
            strong: {
              color: theme('colors.slate.200'),
            },
            thead: {
              color: theme('colors.slate.300'),
              borderBottomColor: 'rgb(148 163 184 / 0.2)',
            },
            'tbody tr': {
              borderBottomColor: 'rgb(148 163 184 / 0.1)',
            },
            blockQuote: {
              color: theme('colors.white'),
            },
          },
        },
      }),
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        mono: ['Fira Code VF', ...defaultTheme.fontFamily.mono],
        source: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
        'ubuntu-mono': ['Ubuntu Mono', ...defaultTheme.fontFamily.mono],
      },
      spacing: {
        18: '4.5rem',
        full: '100%',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      keyframes: {
        'flash-code': {
          '0%': { backgroundColor: 'rgb(125 211 252 / 0.1)' },
          '100%': { backgroundColor: 'transparent' },
        },
      },
      animation: {
        'flash-code': 'flash-code 1s forwards',
        'flash-code-slow': 'flash-code 2s forwards',
      },
      backgroundImage: (theme) => ({
        squiggle: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 3" enable-background="new 0 0 6 3" width="6" height="3" fill="${theme(
            'colors.yellow.400'
          )}"><polygon points="5.5,0 2.5,3 1.1,3 4.1,0"/><polygon points="4,0 6,2 6,0.6 5.4,0"/><polygon points="0,2 1,3 2.4,3 0,0.6"/></svg>`
        )}")`,
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // eslint-disable-line
    require('@tailwindcss/aspect-ratio'), // eslint-disable-line
    require('@tailwindcss/forms')({ strategy: 'class' }), // eslint-disable-line
    function ({ addVariant }) {
      addVariant(
        'supports-backdrop-blur',
        '@supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))'
      );
      addVariant(
        'supports-scrollbars',
        '@supports selector(::-webkit-scrollbar)'
      );
      addVariant('children', '& > *');
      addVariant('scrollbar', '&::-webkit-scrollbar');
      addVariant('scrollbar-track', '&::-webkit-scrollbar-track');
      addVariant('scrollbar-thumb', '&::-webkit-scrollbar-thumb');
      addVariant('demo-dark', '.demo-dark &');
    },
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-grid': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      );

      matchUtilities(
        {
          highlight: (value) => ({ boxShadow: `inset 0 1px 0 0 ${value}` }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      );
    },
    function ({ addUtilities, theme }) {
      const backgroundSize = '7.07px 7.07px';
      const backgroundImage = (color) =>
        `linear-gradient(135deg, ${color} 10%, transparent 10%, transparent 50%, ${color} 50%, ${color} 60%, transparent 60%, transparent 100%)`;
      const colors = Object.entries(theme('backgroundColor')).filter(
        ([, value]) => typeof value === 'object' && value[400] && value[500]
      );

      addUtilities(
        Object.fromEntries(
          colors.map(([name, colors]) => {
            const backgroundColor = `${colors[400]}1a`; // 10% opacity
            const stripeColor = `${colors[500]}80`; // 50% opacity

            return [
              `.bg-stripes-${name}`,
              {
                backgroundColor,
                backgroundImage: backgroundImage(stripeColor),
                backgroundSize,
              },
            ];
          })
        )
      );

      addUtilities({
        '.bg-stripes-white': {
          backgroundImage: backgroundImage('rgba(255 255 255 / 0.75)'),
          backgroundSize,
        },
      });

      addUtilities({
        '.ligatures-none': {
          fontVariantLigatures: 'none',
        },
      });
    },

    // function ({ theme }) {
    //   console.log('theme: ', theme('theme.colors.primary'))

    //   theme.colors.primary = 'white'

    //   console.log('theme: ', theme('theme.colors.primary'))
    // }
  ],
};
