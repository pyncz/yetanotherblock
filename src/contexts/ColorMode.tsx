import type { FC, PropsWithChildren } from 'react'
import { createContext, useEffect, useMemo } from 'react'
import { useLocalStorage } from 'react-use'
import { DEFAULT_THEME, THEME_LOCAL_STORAGE_KEY, themes } from '../consts'
import { usePrefersDarkMode } from '../hooks'
import type { ColorModeValue, Theme } from '../models'

interface ColorModeContextType {
  /** Color mode selected */
  colorMode: ColorModeValue

  /** If the user prefers dark mode */
  prefersDarkMode?: boolean

  /** System preferred theme */
  colorPreference?: Theme

  /** Theme actually applied */
  currentTheme: Theme

  /** Theme applied if there's no theme specified */
  fallbackTheme: Theme

  setColorMode: (_theme: ColorModeValue) => void
}

export const ColorModeContext = createContext<ColorModeContextType>({
  colorMode: null,
  colorPreference: undefined,
  prefersDarkMode: undefined,
  currentTheme: DEFAULT_THEME,
  fallbackTheme: DEFAULT_THEME,
  setColorMode: () => {},
})

export const ColorModeProvider: FC<PropsWithChildren> = ({ children }) => {
  // On mounted, populate color mode from localStorage
  const [colorMode, setColorMode] = useLocalStorage<ColorModeValue>(THEME_LOCAL_STORAGE_KEY, null)

  const prefersDarkMode = usePrefersDarkMode()
  const colorPreference = useMemo(() => {
    return typeof prefersDarkMode === 'undefined'
      ? undefined
      : prefersDarkMode ? 'dark' : 'light'
  }, [prefersDarkMode])

  const fallbackTheme = useMemo(() => {
    return colorPreference ?? DEFAULT_THEME
  }, [colorPreference])

  const currentTheme = useMemo(() => {
    return colorMode ?? fallbackTheme
  }, [colorMode, fallbackTheme])

  useEffect(() => {
    // Update <html> classes
    const root = document.getElementsByTagName('html')[0]!

    // Clear the previous theme classes
    root.classList.remove(...themes.map((theme) => `${theme}-mode`))
    // Add the corresponding theme class
    root.classList.add(`${currentTheme}-mode`)
  }, [currentTheme])

  return (
    <ColorModeContext.Provider
      value={{
        colorMode: colorMode!,
        prefersDarkMode,
        colorPreference,
        currentTheme,
        fallbackTheme,
        setColorMode,
      }}
    >
      {children}
    </ColorModeContext.Provider>
  )
}
