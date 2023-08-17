import type { FC, PropsWithChildren } from 'react'
import { AppFooter, LogoLink, ThemeRadio } from '../components'
import { useBreakpoint } from '../hooks'
import { LayoutBase } from './base'

export const LayoutMain: FC<PropsWithChildren> = ({ children }) => {
  const placeWrappingIntoSidebar = useBreakpoint('lg')

  return (
    <LayoutBase hideLogo={placeWrappingIntoSidebar} hideFooter={placeWrappingIntoSidebar}>
      <div className="lg:tw-sticky tw-top-0 lg:tw-min-h-full sm:tw-col-[1/3] lg:tw-col-[1] sm:tw-row-[2/3] lg:tw-row-[1/5] tw-gap-2 tw-flex tw-flex-col">
        {placeWrappingIntoSidebar
          ? (
            <div className="tw-inline-flex">
              <LogoLink />
            </div>
            )
          : null
        }

        <div className="tw-bg-[red] tw-flex-1">
          Connect / connected state and navigation
        </div>

        {placeWrappingIntoSidebar
          ? <AppFooter />
          : null
        }
      </div>

      {children}
    </LayoutBase>
  )
}
