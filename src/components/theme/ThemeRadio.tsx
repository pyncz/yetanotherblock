import { useTranslation } from 'next-i18next'
import type { FC } from 'react'
import { colorModes } from '../../consts'
import { useColorMode } from '../../hooks'
import type { ColorMode, PropsWithClassName } from '../../models'
import { getColorModeValue } from '../../utils'
import { RadioGroup } from '../ui'

export const ThemeRadio: FC<PropsWithClassName> = ({ className }) => {
  const { setColorMode, colorMode, fallbackTheme } = useColorMode()
  const { i18n } = useTranslation()

  return (
    <RadioGroup
      value={colorMode ?? 'system'}
      options={colorModes.map((x) => x)}
      className={className}
      onChange={(colorMode) => {
        setColorMode(getColorModeValue(colorMode as ColorMode))
      }}
      renderOption={(option) => {
        const colorMode = option as ColorMode
        return (
          <span className="tw-relative">
            <span className="tw-font-medium tw-block">
              {i18n.t(`theme.${colorMode}`)}
            </span>
            {
              colorMode === 'system'
                ? (
                  // Tell which theme is "system"
                  <span className="tw-block tw-text-x4 tw-text-xs">
                    {i18n.t(`theme.${fallbackTheme}`)}
                  </span>
                  )
                : null
            }
          </span>
        )
      }}
    />
  )
}
