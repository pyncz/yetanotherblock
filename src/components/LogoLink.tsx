import type { FC } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import type { LogoProps } from '../models'
import { LogoMain } from './logos'

export const LogoLink: FC<LogoProps> = (props) => {
  const { className, ...logoProps } = props

  return (
    <Link
      href="/"
      className={classNames(
        '!tw-outline-none tw-duration-normal tw-opacity-[0.9] hover:tw-opacity-full',
        className,
      )}
    >
      <LogoMain {...logoProps} />
    </Link>
  )
}
