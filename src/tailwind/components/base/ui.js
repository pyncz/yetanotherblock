/**
 * Get UI element's common attributes such as on-focus ring, border radius, transition duration and size
 * @param theme Tailwind CSS `theme` object
 * @returns UI element's attributes
 */
export const getUiElement = (theme) => {
  const focusStyles = {
    '--tw-ring-opacity': 'var(--o-ring)',
  }

  return {
    'height': 'var(--ui-size)',
    'padding': 'var(--ui-py) var(--ui-px)',

    'outline': 'none !important',
    'textTransform': 'uppercase',
    'lineHeight': '1',
    'borderRadius': theme('borderRadius.xs'),
    'transitionDuration': theme('transitionDuration.normal'),
    '&:hover': {
      transitionDuration: theme('transitionDuration.fast'),
    },

    // ring
    '--tw-ring-opacity': '0',
    '--tw-ring-color': 'rgba(var(--ui-ring), var(--tw-ring-opacity))',
    '--tw-ring-offset-shadow': 'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
    '--tw-ring-shadow': 'var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
    'boxShadow': 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
    '&:focus': focusStyles,
    '&:focus-within': focusStyles,
  }
}
