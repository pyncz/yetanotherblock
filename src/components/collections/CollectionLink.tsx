import type { FC, PropsWithChildren } from 'react'
import { env } from '../../env/client.mjs'
import type { PropsWithClassName } from '../../models'

interface Props {
  address?: string
}

export const CollectionLink: FC<PropsWithClassName<PropsWithChildren<Props>>> = (props) => {
  const { children, className, address } = props

  if (!address) {
    return children
  }

  return (
    <a
      target="_blank"
      rel="noreferrer"
      className={className}
      href={`${env.NEXT_PUBLIC_MAIN_MARKETPLACE_URL}/collections/${address}`}
    >
      {children}
    </a>
  )
}
