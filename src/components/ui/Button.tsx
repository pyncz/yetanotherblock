import { forwardRef } from 'react'
import classNames from 'classnames'
import type { ButtonProps, PropsWithClassName } from '../../models'

export const Button = forwardRef<HTMLButtonElement, PropsWithClassName<ButtonProps>>((props, ref) => {
  const {
    children,
    appearance = 'primary',
    icon = null,
    iconLeft = null,
    iconRight = null,
    className,
    size,
    ...attributes
  } = props

  const noContent = !(children || iconLeft || iconRight)

  return (
    <button
      ref={ref}
      {...attributes}
      className={classNames(
        'tw-button',
        {
          'tw-button-icon': noContent,
          'tw-button-primary': appearance === 'primary',
          'tw-button-secondary': appearance === 'secondary',
        },
        className,
      )}
    >
      {icon ?? (
        <>
          {iconLeft}
          {children}
          {iconRight}
        </>
      )}
    </button>
  )
})

Button.displayName = 'Button'
