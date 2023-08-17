import type { FC, PropsWithChildren } from 'react'
import classNames from 'classnames'
import type { PropsWithClassName } from '../../models'

export const Tag: FC<PropsWithChildren<PropsWithClassName>> = (props) => {
  const { children, className } = props

  return (
    <span className={classNames('tw-rounded tw-bg-x4 tw-opacity-soft tw-px-[0.25em] tw-py-[0.0625em]', className)}>
      {children}
    </span>
  )
}
