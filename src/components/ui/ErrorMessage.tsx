import type { FC } from 'react'
import classNames from 'classnames'
import type { PropsWithClassName } from '../../models'

interface Props {
  message?: string
}

export const ErrorMessage: FC<PropsWithClassName<Props>> = ({ message, className }) => {
  if (message) {
    return (
      <p role="alert" className={classNames('tw-text-state-error tw-text-3/4', className)}>
        {message}
      </p>
    )
  }

  return null
}
