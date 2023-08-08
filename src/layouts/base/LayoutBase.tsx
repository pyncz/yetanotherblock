import type { FC, PropsWithChildren } from 'react'
import { AppFooter, LogoLink } from '../../components'

export const LayoutBase: FC<PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <main className="tw-p-8 tw-flex tw-flex-col tw-layout tw-gap-8 sm:tw-gap-12">
      <div className="tw-flex tw-py-2">
        <LogoLink />
      </div>

      {children}

      <AppFooter />
    </main>
  )
}
