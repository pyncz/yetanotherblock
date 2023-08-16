export const useSongMetadata = (value?: string) => {
  // cut out anotherblock wordmark
  const summary = value?.replace(/\s*\|\s*anotherblock/i, '')

  const [_, rawName, _byMatch, artist] = summary?.match(/^(.*?)(\sby\s(.*))?$/i) ?? []
  const [__, _supplyMatch, index, supply, name] = rawName?.match(/^(\[(\d+)\/(\d+)\]\s)?(.*)$/i) ?? []

  return { name, artist, summary, index, supply }
}
