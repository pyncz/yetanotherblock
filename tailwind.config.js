import plugin from 'tailwindcss/plugin'
import maskImagePlugin from '@pyncz/tailwind-mask-image'
import { addButton, addFlexUtils, addHeaders, addLink, addSizeUtils } from './src/tailwind'
import { co, fill } from './src/tailwind/helpers'

const sansSerif = [
  'ui-sans-serif',
  'system-ui',
  '-apple-system',
  'sans-serif',
]

// Read more about tailwindcss configuration: https://tailwindcss.com/docs/configuration
export default {
  mode: 'jit',
  prefix: 'tw-',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    data: {
      disabled: 'disabled',
    },

    fontSize: {
      'xs': '0.75rem',
      'sm': '0.875rem',
      'normal': '1rem',
      'lg': '1.25rem',
      'xl': '1.375rem',
      '2xl': '1.625rem',
      '3xl': '2rem',

      '3/4': '0.75em',
      '7/8': '0.875em',
      'em': '1em',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '2rem',
        lg: '2.5rem',
      },
    },
    colors: {
      black: co('--black'),
      white: co('--white'),
      accent: {
        primary: co('--accent-primary'),
        secondary: co('--accent-secondary'),
      },
      state: {
        error: co('--state-error'),
        success: co('--state-success'),
        warning: co('--state-warning'),
      },
      current: 'currentcolor',
    },

    fontFamily: {
      header: ['var(--font-manrope)', 'Manrope', ...sansSerif],
      sans: ['var(--font-opensans)', '"Open Sans"', ...sansSerif],
      mono: ['var(--font-dm-mono)', '"DM Mono"', 'monospace'],
    },
    lineHeight: {
      1: 1,
      xs: 1.1,
      sm: 1.15,
      md: 1.3,
      lg: 1.5,
      inherit: 'inherit',
    },
    // skins
    textColor: (theme) => ({
      ...theme('colors'),
      ...fill(5, (i) => co(`--text-x${i}`), (i) => `x${i}`),
    }),
    backgroundColor: (theme) => ({
      ...theme('colors'),
      ...fill(5, (i) => co(`--bg-x${i}`), (i) => `x${i}`),
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
      ...fill(4, (i) => co(`--border-x${i}`), (i) => `x${i}`),
      transparent: 'transparent',
    }),
    borderRadius: {
      0: '0',
      xs: '0.25rem',
      sm: '0.5rem',
      DEFAULT: '0.75rem',
      lg: '1rem',
      xl: '1.5rem',
      full: '9999px',
    },
    scale: {
      click: '0.975',
      normal: '1',
      zoom: '1.025',
    },
    fill: (theme) => theme('textColor'),
    stroke: (theme) => theme('borderColor'),
    opacity: {
      0: '0',
      10: '0.1',
      20: '0.2',
      muted: '0.5',
      soft: '0.8',
      full: '1',
    },
    transitionDuration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    zIndex: {
      muted: '-1',
      1: '1',
    },

    extend: {
      screens: {
        xs: '400px',
      },
      blur: {
        px: '1px',
      },
      spacing: {
        em: '1em',
        cardPadding: '0.75rem',
      },
      animation: {
        swing: 'swing infinite 1s linear alternate-reverse',
      },
      keyframes: {
        swing: {
          from: { transform: 'rotate(calc(0deg + var(--swing-angle, 180deg)))' },
          to: { transform: 'rotate(calc(0deg - var(--swing-angle, 180deg)))' },
        },
      },
    },
  },
  plugins: [
    maskImagePlugin,

    plugin(addHeaders),
    plugin(addFlexUtils),
    plugin(addSizeUtils),

    // Components
    plugin(addButton),
    plugin(addLink),

    ({ addComponents }) => {
      addComponents({
        '.grid-main': {
          'display': 'grid',
          'alignItems': 'flex-start',
          'gridTemplateColumns': 'repeat(1, minmax(0, 1fr))',
          'rowGap': '1rem',
          'columnGap': '1.5rem',
          '@screen md': {
            rowGap: '1.5rem',
            columnGap: '2rem',
          },
        },
      })
    },
  ],
}
