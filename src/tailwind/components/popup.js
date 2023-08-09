import { c } from '../helpers'

function slideKeyframes(startOffset, axis) {
  const transform = `translate${axis}`
  return {
    '0%': {
      opacity: 0,
      transform: `scale(0.5) ${transform}(${startOffset}px)`,
    },
    '100%': {
      opacity: 1,
      transform: `scale(1) ${transform}(0)`,
    },
  }
}

const AnimationDirectionMode = {
  opposite: -1,
  along: 1,
}

const MODE = AnimationDirectionMode.along
const OFFSET = 24

export const addPopup = ({ addComponents, theme }) => {
  addComponents({
    '.popup-content': {
      // defaults
      '--tw-text-opacity': '1',
      '--tw-bg-opacity': '1',

      'backgroundColor': c('--bg-dim-3', '0.20'),
      'color': c('--text-dim-2', 'var(--tw-text-opacity)'),

      'lineHeight': '1',
      'userSelect': 'none',
      'whiteSpace': 'nowrap',
      'cursor': 'auto',
      'boxShadow': theme('boxShadow.popup'),
      'fontSize': theme('fontSize[7/8]'),
      'padding': theme('spacing.2'),
      'borderRadius': theme('borderRadius.DEFAULT'),
      'display': 'flex',
      'flexDirection': 'column',
      'alignItems': 'flex-start',
      'gap': '1px',
      'backdropFilter': `blur(${theme('backdropBlur.sm')})`,

      '&[data-side=top]': {
        '@keyframes slideToTop': slideKeyframes(OFFSET * MODE, 'Y'),
        'animation': `slideToTop ${theme('transitionDuration.fast')} ${theme('transitionTimingFunction.bezier')}`,
      },
      '&[data-side=bottom]': {
        '@keyframes slideToBottom': slideKeyframes(-OFFSET * MODE, 'Y'),
        'animation': `slideToBottom ${theme('transitionDuration.fast')} ${theme('transitionTimingFunction.bezier')}`,
      },
      '&[data-side=left]': {
        '@keyframes slideToLeft': slideKeyframes(OFFSET * MODE, 'X'),
        'animation': `slideToLeft ${theme('transitionDuration.fast')} ${theme('transitionTimingFunction.bezier')}`,
      },
      '&[data-side=right]': {
        '@keyframes slideToRight': slideKeyframes(-OFFSET * MODE, 'X'),
        'animation': `slideToRight ${theme('transitionDuration.fast')} ${theme('transitionTimingFunction.bezier')}`,
      },
    },
    '.popup-arrow': {
      fill: c('--bg-dim-2'),
    },
  })
}
