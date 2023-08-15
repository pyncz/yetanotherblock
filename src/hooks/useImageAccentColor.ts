import type { RefObject } from 'react'
import { useMemo } from 'react'
import ColorThief from 'colorthief/dist/color-thief.mjs'
import { useAsync } from 'react-use'
import chroma from 'chroma-js'

const colorThief = new ColorThief()

export const useImageAccentColor = (
  coverImageRef?: RefObject<HTMLImageElement>,
  colorsToTryAsAccent = 1,
) => {
  const { value: primaryColorsPalette } = useAsync(async (): Promise<[number, number, number][]> => {
    const ref = coverImageRef?.current
    if (ref) {
      return ref.complete
        ? await colorThief.getPalette(ref)
        : await new Promise((resolve) => {
          ref.addEventListener('load', async function readPalette() {
            // listen just once
            ref.removeEventListener('load', readPalette)

            const res = await colorThief.getPalette(ref)
            resolve(res)
          })
        })
    }
    return []
  }, [coverImageRef])

  const accentColor = useMemo(() => {
    for (const color of primaryColorsPalette?.slice(0, colorsToTryAsAccent) ?? []) {
      const chromaColor = chroma(color)

      // don't accept as an accent color if saturation is too low
      if (chromaColor.get('hsv.s') < 0.5) {
        continue
      }

      // adjust color to get a more vivid accent color
      const rgb = chromaColor
        .set('hsl.s', 0.5)
        .set('hsv.v', 1)
        .rgb()
      return `rgb(${rgb.join(',')})`
    }
    return undefined
  }, [primaryColorsPalette, colorsToTryAsAccent])

  return accentColor
}
