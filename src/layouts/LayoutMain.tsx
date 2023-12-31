import type { FC, PropsWithChildren } from 'react'
import classNames from 'classnames'
import { useTranslation } from 'next-i18next'
import { AppFooter, LogoLink } from '../components'
import { useBreakpoint } from '../hooks'
import { LayoutBase } from './base'

export const LayoutMain: FC<PropsWithChildren> = ({ children }) => {
  const { i18n } = useTranslation()
  const placeWrappingIntoSidebar = useBreakpoint('lg')

  return (
    <LayoutBase hideLogo={placeWrappingIntoSidebar} hideFooter>
      <div className="lg:tw-sticky tw-top-0 lg:tw-min-h-full sm:tw-col-[1/3] lg:tw-col-[1] sm:tw-row-[2/3] lg:tw-row-[1/5] tw-gap-3 tw-flex tw-flex-col">
        <div className="tw-hidden lg:tw-inline-flex">
          <LogoLink />
        </div>

        <div
          className={classNames(
            'dark-mode',
            'tw-relative tw-overflow-hidden tw-text-x1 tw-px-2 xs:tw-px-4 sm:tw-px-6 tw-py-12 tw-min-h-[13rem] tw-flex-1 tw-rounded tw-border tw-border-x1 tw-border-opacity-10 tw-grid tw-grid-rows-4',
            'before:tw-absolute before:tw-ease-out before:tw-duration-fast hover:before:tw-duration-[1s] before:tw--inset-4 hover:before:tw-inset-0 before:tw-bg-[url(/img/hero-bg.jpg)] before:tw-bg-cover',
            'after:tw-absolute after:tw-ease-out after:tw-duration-fast hover:after:tw-blur-sm hover:after:tw-duration-[1s] after:tw-inset-0 hover:after:tw--inset-4 after:tw-bg-[url(/img/hero-stuff.png)] after:tw-bg-cover after:tw-bg-bottom',
          )}
        >
          <h1 className="tw-h3 xs:tw-h2 sm:tw-h1 tw-relative tw-row-[2/4] tw-z-1 tw-uppercase tw-max-w-[16rem] tw-my-0 tw-mx-auto tw-space-y-2">
            <span className="tw-text-left tw-block">
              {i18n.t('heroFirst')}
            </span>
            <span className="tw-text-right tw-text-x0 tw-text-opacity-0 tw-block tw-bg-[linear-gradient(42deg,_#FFF_0%,_#FFC289_40%,_#FF5B5B_80%,_#674FFF_120%)] tw-bg-clip-text">
              {i18n.t('heroSecond')}
            </span>
          </h1>
        </div>

        <AppFooter className="tw-hidden lg:tw-flex" />
      </div>

      {children}
    </LayoutBase>
  )
}
