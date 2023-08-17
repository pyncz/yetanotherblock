import type { FC, PropsWithChildren, ReactElement, ReactNode } from 'react'
import classNames from 'classnames'
import type { PropsWithClassName } from '../../../models'

type LabelProps = {
  children: ReactNode
  label?: string
} | {
  label: string
  children?: ReactNode
}

type Props = LabelProps & {
  image?: ReactElement | null
  description?: ReactNode
  title?: string
}

export const Representation: FC<PropsWithChildren<PropsWithClassName<Props>>> = (props) => {
  const {
    children,
    image,
    label,
    description,
    title,
    className,
  } = props

  return (
    <span title={title} className={classNames('tw-inline-flex tw-items-center tw-gap-[0.875ch]', className)}>
      {image ?? null}

      <div className="tw-truncate tw-flex-col tw-flex-center-x">
        <div className="tw-truncate">{children ?? label}</div>
        {description
          ? <small className="tw-text-x3 tw-mt-[0.125em]">{description}</small>
          : null
        }
      </div>
    </span>
  )
}
