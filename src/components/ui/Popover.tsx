import * as RadixPopover from '@radix-ui/react-popover'
import type { FC, PropsWithChildren, ReactNode } from 'react'
import type { Position } from '../../models'

interface Props {
  position?: Position
  trigger: ReactNode
}

export const Popover: FC<PropsWithChildren<Props>> = (props) => {
  const {
    children,
    trigger,
    position = 'bottom',
  } = props

  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger asChild>
        {trigger}
      </RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content
          className="tw-popup-content"
          sideOffset={5}
          side={position}
        >
          {children}
          <RadixPopover.Arrow className="tw-popup-arrow" />
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  )
}
