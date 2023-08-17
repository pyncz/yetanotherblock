/**
 * Fill values for enumerable props
 */
export const fill = (
  volume,
  valueGetter,
  keyGetter = (i) => `${i}`,
) => {
  const config = {}
  for (let i = 0; i < volume; i++) {
    config[keyGetter(i, volume)] = valueGetter(i, volume)
  }

  return config
}
