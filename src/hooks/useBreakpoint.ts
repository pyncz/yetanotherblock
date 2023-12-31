import { useMemo } from 'react'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'
import { useMediaQuery } from './useMediaQuery'

const fullConfig = resolveConfig(tailwindConfig as any)
const screens = fullConfig.theme!.screens as Record<string, string>

export const useBreakpoint = (breakpoint?: string) => {
  const mediaQuery = useMemo(() => {
    if (breakpoint) {
      const breakpointPx = screens[breakpoint]
      if (!breakpointPx) {
        throw new Error(`There's no '${breakpoint}' breakpoint in the tailwind config!`)
      }

      return `(min-width: ${breakpointPx})`
    }
    return undefined
  }, [breakpoint])

  return useMediaQuery(mediaQuery)
}
