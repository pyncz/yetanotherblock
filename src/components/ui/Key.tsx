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
        'tw-relative tw-rounded-sm tw-px-3 tw-py-2 tw-border tw-border-dim-2 tw-inline-flex tw-items-center tw-justify-center tw-whitespace-pre tw-font-mono tw-text-dim-2',
        'before:tw-absolute before:tw-inset-0.5 before:tw-rounded-full before:tw-bg-base before:tw-border before:tw-border-dim-3',
        'after:tw-absolute after:tw-inset-0 tw-bg-[conic-gradient(rgba(var(--bg-dim-3),_0)_60%,_rgba(var(--bg-dim-3),_1)_80%,_rgba(var(--bg-dim-3),_0)_100%)]',
        pressed
          ? 'tw-duration-fast tw-bg-dim-2 tw-text-opacity-soft'
          : 'tw-duration-normal tw-bg-dim-1 tw-text-opacity-muted',
        className,
      )}
    >
      <div className="tw-relative tw-inline-flex">
        {children}
      </div>
    </div>
  )
}
