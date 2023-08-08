import * as RadixDropdown from '@radix-ui/react-dropdown-menu'
import type { FC, PropsWithChildren, ReactNode } from 'react'
import type { Position, PropsWithClassName } from '../../../models'

interface Props {
  trigger: ReactNode
  position?: Position
  align?: 'start' | 'end' | 'center'
}

export const Dropdown: FC<PropsWithChildren<PropsWithClassName<Props>>> = (props) => {
  const {
    trigger,
    position = 'bottom',
    align = 'start',
    className,
    children,
  } = props

  return (
    <RadixDropdown.Root>
      <RadixDropdown.Trigger asChild className={className}>
        {trigger}
      </RadixDropdown.Trigger>

      <RadixDropdown.Portal>
        <RadixDropdown.Content
          sideOffset={2}
          side={position}
          align={align}
          className="tw-popup-content"
        >
          {children}
        </RadixDropdown.Content>
      </RadixDropdown.Portal>
    </RadixDropdown.Root>
  )
}

export { DropdownItem } from './item'
