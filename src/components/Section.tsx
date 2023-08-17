import type { FC, PropsWithChildren, ReactNode } from 'react'
import classNames from 'classnames'
import type { PropsWithClassName } from '../models'

interface Props {
  title: string | ReactNode
}

export const Section: FC<PropsWithClassName<PropsWithChildren<Props>>> = (props) => {
  const { title, className, children } = props

  return (
    <section className={classNames('tw-space-y-4 lg:tw-space-y-5 tw-py-2 sm:tw-py-0', className)}>
      {typeof title === 'string'
        ? <h3>{title}</h3>
        : title
      }
      <div className="sm:tw-pb-6">
        {children}
      </div>
    </section>
  )
}
