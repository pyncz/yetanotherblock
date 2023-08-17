import type { FC, PropsWithChildren } from 'react'
import { useKeyPress } from 'react-use'
import classNames from 'classnames'
import type { PropsWithClassName } from '../../models'

interface Props {
  highlightOn?: string[]
}

export const Key: FC<PropsWithChildren<PropsWithClassName<Props>>> = (props) => {
  const {
    highlightOn = [],
    className,
    children,
  } = props

  const [pressed] = useKeyPress((e) => highlightOn.includes(e.key))

  return (
    <div
      className={classNames(
        'tw-relative tw-rounded-sm tw-px-3 tw-py-2 tw-border tw-border-x3 tw-inline-flex tw-items-center tw-justify-center tw-whitespace-pre tw-font-mono tw-text-x3',
        'before:tw-absolute before:tw-inset-0.5 before:tw-rounded-full before:tw-bg-x1 before:tw-border before:tw-border-x3',
        'after:tw-absolute after:tw-inset-0 tw-bg-[conic-gradient(rgba(var(--bg-x4),_0)_60%,_rgba(var(--bg-x4),_1)_80%,_rgba(var(--bg-x4),_0)_100%)]',
        pressed
          ? 'tw-duration-fast tw-bg-x3 tw-text-opacity-soft'
          : 'tw-duration-normal tw-bg-x2 tw-text-opacity-muted',
        className,
      )}
    >
      <div className="tw-relative tw-inline-flex">
        {children}
      </div>
    </div>
  )
}
