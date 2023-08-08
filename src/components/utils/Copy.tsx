import type { FC } from 'react'
import { useCopyToClipboard } from '../../hooks'
import type { PropsWithClassName } from '../../models'

interface Props {
  value: string
  render: FC<ReturnType<typeof useCopyToClipboard>>
}

export const Copy: FC<PropsWithClassName<Props>> = (props) => {
  const { value, render } = props

  const scope = useCopyToClipboard(value)

  return render(scope)
}
