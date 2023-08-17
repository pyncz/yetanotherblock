import { useTranslation } from 'next-i18next'
import type { FC } from 'react'
import { Icon } from '@iconify-icon/react'
import systemThemeIcon from '@iconify/icons-iconoir/computer'
import lightThemeIcon from '@iconify/icons-iconoir/sun-light'
import darkThemeIcon from '@iconify/icons-iconoir/half-moon'
import { colorModes } from '../../consts'
import { useColorMode } from '../../hooks'
import type { ColorMode, PropsWithClassName } from '../../models'
import { getColorModeValue } from '../../utils'
import { RadioGroup } from '../ui'

export const ThemeRadio: FC<PropsWithClassName> = ({ className }) => {
  const { setColorMode, colorMode } = useColorMode()
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

        const icon = colorMode === 'system'
          ? systemThemeIcon
          : colorMode === 'light'
            ? lightThemeIcon
            : darkThemeIcon

        return (
          <Icon
            icon={icon}
            className="tw-flex"
            title={i18n.t(`theme.${colorMode}`)}
          />
        )
      }}
    />
  )
}
