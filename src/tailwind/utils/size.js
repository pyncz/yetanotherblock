export const addSizeUtils = ({ matchUtilities, theme }) => {
  const size = (value) => ({
    height: value,
    width: value,
  })

  const strictSize = (value) => ({
    ...size(value),
    minHeight: value,
    minWidth: value,
  })

  matchUtilities(
    {
      'size': size,
      'strict-size': strictSize,
      'circle': (value) => ({
        ...strictSize(value),
        borderRadius: theme('borderRadius.full'),
      }),
    },
    { values: theme('height') },
  )
}
