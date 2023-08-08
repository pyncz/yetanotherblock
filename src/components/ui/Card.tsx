import type { FC, PropsWithChildren } from 'react'
import classNames from 'classnames'
import type { PropsWithClassName } from '../../models'

export const Card: FC<PropsWithChildren<PropsWithClassName>> = (props) => {
  const { children, className } = props

  return (
    <div className={classNames('tw-p-[2em] tw-rounded-[2em] tw-bg-dim-1', className)}>
      {children}
    </div>
  )
}
