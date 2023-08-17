import plugin from 'tailwindcss/plugin'
import maskImagePlugin from '@pyncz/tailwind-mask-image'
import { addButton, addFlexUtils, addHeaders, addInput, addLink, addPopup, addSizeUtils, addUiElement } from './src/tailwind'
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
      open: 'state~="open"',
      closed: 'state~="closed"',
      checked: 'state~="checked"',
      highlighted: 'highlighted',
      disabled: 'disabled',
      placeholder: 'placeholder',
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
    boxShadow: {
      none: 'none',
      card: '0 0 0.25rem 0 rgba(2, 8, 154, 0.25)',
      connect: '0 2.25rem 3.5rem -3.5rem var(--tw-shadow-color)',
      popup: '0 0 0 1px rgba(var(--border-x2), 0.5), 0 0.75rem 1.75rem -1.75rem rgba(var(--text-x1), 0.25)',
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
        '2xs': '320px',
        'xs': '400px',
      },
      blur: {
        px: '1px',
      },
      spacing: {
        em: '1em',
        cardPadding: '0.75rem',
      },
      height: {
        ui: 'var(--ui-size)',
      },
      animation: {
        fadeIn: 'fadeIn 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        popUp: 'popUp 500ms cubic-bezier(0.16, 1, 0.3, 1)',
        swing: 'swing infinite 1s linear alternate-reverse',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        swing: {
          from: { transform: 'rotate(calc(0deg + var(--swing-angle, 180deg)))' },
          to: { transform: 'rotate(calc(0deg - var(--swing-angle, 180deg)))' },
        },
        popUp: {
          from: {
            opacity: '0',
            transform: 'translate(-50%, -48%) scale(0.96)',
          },
          to: {
            opacity: '1',
            transform: 'translate(-50%, -50%) scale(1)',
          },
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
    plugin(addUiElement),
    plugin(addButton),
    plugin(addInput),
    plugin(addPopup),
    plugin(addLink),

    ({ addVariant, addComponents, addUtilities }) => {
      addVariant('checked', '&[data-state="checked"]')
      addVariant('child', '& > *')

      addUtilities({
        '.bg-walletconnect': { background: 'radial-gradient(19.12% 29.46% at 22% 16.15%, #10937D 0%, #10937D 48%, rgba(16, 147, 125, 0) 100%), radial-gradient(31.9% 84.92% at -1.43% 48.01%, #8551EC 0%, #8551EC 72%, rgba(133, 81, 236, 0) 100%), radial-gradient(13.72% 22.39% at 78.65% 12.96%, #C251FB 0%, #C251FB 87.3%, rgba(194, 81, 251, 0) 100%), radial-gradient(24.05% 36.11% at 87.11% 40.58%, #F651CC 0%, #F64ECC 68.1%, rgba(246, 78, 204, 0) 100%), radial-gradient(74.54% 87.25% at 59.76% -2.97%, #C4397E 0%, #C6397F 32.2%, rgba(198, 57, 127, 0) 100%), radial-gradient(35.46% 34.71% at 56.51% 39.51%, #4567FB 0%, #4567FB 92.4%, rgba(69, 103, 251, 0) 100%), radial-gradient(39.3% 48.53% at 71.48% 99%, #70D75B 0%, #7CD94E 47.7%, rgba(124, 217, 78, 0) 100%), #03ACDA' },
        '.bg-metamask': { background: 'radial-gradient(36.08% 53.59% at 131.76% -15.35%, #FF8540 0%, #FF8540 48%, rgba(255, 133, 64, 0) 100%), radial-gradient(107.18% 84.3% at 101.83% -79.63%, #E2FF2F 0%, #E2FF2F 72%, rgba(226, 255, 47, 0) 100%), radial-gradient(61.42% 50.8% at 48.91% 125.38%, #F6516F 0%, #F6516F 68.1%, rgba(246, 81, 111, 0) 100%), radial-gradient(181.96% 141.3% at 132.63% 77.42%, #FFDA18 0%, #FFDA18 32.2%, rgba(255, 218, 24, 0) 100%), radial-gradient(70.9% 106.14% at -25.67% 70.09%, #FF007A 0%, #FF007A 47.7%, rgba(255, 0, 122, 0) 100%), #F6851B' },
        '.bg-coinbase': { background: 'radial-gradient(73.83% 74.05% at -17.58% -16.49%, #7200E5 0%, #7200E6 48%, rgba(114, 0, 229, 0) 100%), radial-gradient(93.22% 101.83% at -86.42% 14.2%, #4541FF 0%, #4541FF 65.1%, #41FFE8 72%, rgba(69, 65, 255, 0) 100%), radial-gradient(37.73% 37.47% at 118.14% 9.05%, #2BC0FF 0%, #2BC0FF 87.3%, rgba(43, 193, 255, 0) 100%), radial-gradient(113.4% 62.69% at 65.43% 121.49%, #6AC9FF 0%, #6AC9FF 47.7%, rgba(106, 201, 255, 0) 100%), #0052FF' },
      })

      addComponents({
        '.px-ui': {
          paddingLeft: 'var(--ui-px)',
          paddingRight: 'var(--ui-px)',
        },
        '.py-ui': {
          paddingTop: 'var(--ui-py)',
          paddingBottom: 'var(--ui-py)',
        },
      })

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
