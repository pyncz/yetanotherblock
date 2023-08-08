import Link from 'next/link'
import type { FC } from 'react'
import classNames from 'classnames'
import type { ButtonProps, PropsWithClassName } from '../../models'
import { Button } from './Button'

interface Props extends ButtonProps {
  href: string
  locale?: string
  targetBlank?: boolean
}

export const ButtonLink: FC<PropsWithClassName<Props>> = (props) => {
  const { href, locale, targetBlank, className, ...buttonProps } = props
  const target = targetBlank ? '_blank' : undefined

  return (
    <Link
      href={href}
      locale={locale}
      target={target}
      className={classNames('!tw-border-none', className)}
    >
      <Button {...buttonProps} className="tw-w-full tw-h-full" />
    </Link>
  )
}
