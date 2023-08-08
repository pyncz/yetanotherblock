export const addSizeUtils = ({ matchUtilities, theme }) => {
  const size = (value) => ({
    height: value,
    width: value,
    // minHeight: value,
    // minWidth: value,
  })

  matchUtilities(
    {
      size,
      circle: (value) => ({
        ...size(value),
        borderRadius: theme('borderRadius.full'),
      }),
    },
    { values: theme('height') },
  )
}
