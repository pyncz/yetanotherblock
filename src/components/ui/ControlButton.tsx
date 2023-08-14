import { forwardRef } from 'react'
import classNames from 'classnames'
import type { ButtonProps, PropsWithClassName } from '../../models'

export const ControlButton = forwardRef<HTMLButtonElement, PropsWithClassName<ButtonProps>>((props, ref) => {
  const { className, children, ...attributes } = props

  return (
    <button
      ref={ref}
      {...attributes}
      className={classNames(
        '!tw-border-none tw-button tw-button-secondary tw-w-full',
        'sm:tw-link sm:tw-link-muted sm:!tw-p-1.5 sm:[background:none] sm:tw-rounded-0 sm:tw-w-auto sm:tw-h-auto',
        className,
      )}
    >
      {children}
    </button>
  )
})

ControlButton.displayName = 'ControlButton'
