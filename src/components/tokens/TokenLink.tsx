import type { FC, PropsWithChildren } from 'react'
import type { useTokens } from '@reservoir0x/reservoir-kit-ui'
import { env } from '../../env/client.mjs'
import type { PropsWithClassName } from '../../models'

interface Props {
  token: ReturnType<typeof useTokens>['data'][number]['token']
}

export const TokenLink: FC<PropsWithClassName<PropsWithChildren<Props>>> = (props) => {
  const { children, className, token } = props

  if (!token) {
    return children
  }

  return (
    <a
      target="_blank"
      rel="noreferrer"
      className={className}
      href={`${env.NEXT_PUBLIC_MAIN_MARKETPLACE_URL}/${token?.contract}/${token?.tokenId}`}
    >
      {children}
    </a>
  )
}
