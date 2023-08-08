import type { FC, PropsWithChildren, ReactNode } from 'react'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import type { Position } from '../../models'

interface Props {
  position?: Position
  trigger: ReactNode
}

export const Tooltip: FC<PropsWithChildren<Props>> = (props) => {
  const {
    children,
    trigger,
    position = 'bottom',
  } = props

  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root delayDuration={500}>
        <RadixTooltip.Trigger asChild>
          {trigger}
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className="tw-popup-content"
            sideOffset={5}
            side={position}
          >
            {children}
            <RadixTooltip.Arrow className="tw-popup-arrow" />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}
