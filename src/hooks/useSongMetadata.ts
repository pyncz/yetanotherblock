export const useSongMetadata = (collectionName?: string) => {
  const summary = collectionName?.replace(/\s*\|\s*anotherblock/i, '')
  const [_, name, artist] = summary?.match(/^(.*)\sby\s(.*)$/i) ?? []

  return { name, artist, summary }
}
