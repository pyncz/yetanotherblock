import { getUiElement } from './base'

export const addUiElement = ({ addComponents, theme }) => {
  const uiElement = getUiElement(theme)

  addComponents({
    '.ui-element': uiElement,
  })
}
