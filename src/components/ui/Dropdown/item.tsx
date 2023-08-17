import * as RadixDropdown from '@radix-ui/react-dropdown-menu'
import type { FC, PropsWithChildren, ReactNode } from 'react'

interface Props extends RadixDropdown.DropdownMenuItemProps {
  icon?: ReactNode
}

export const DropdownItem: FC<PropsWithChildren<Props>> = (props) => {
  const { children, icon, ...attributes } = props

  return (
    <RadixDropdown.Item
      asChild
      className="tw-text-sm !tw-outline-none tw-rounded-sm tw-py-2 tw-px-1.5 tw-duration-fast tw-text-x3 hover:tw-text-x2 hover:tw-bg-x4 data-highlighted:tw-bg-x4"
      {...attributes}
    >
      <button className="tw-flex-center-y tw-gap-1">
        <span className="tw-opacity-muted tw-inline-flex">
          {icon ?? null}
        </span>
        <span className="tw-px-0.5">
          {children}
        </span>
      </button>
    </RadixDropdown.Item>
  )
}
