import type { FC, PropsWithChildren } from 'react'
import classNames from 'classnames'
import { AppFooter, LogoLink } from '../../components'
import { useBreakpoint } from '../../hooks'

interface Props {
  hideWrapping?: boolean
}

export const LayoutBase: FC<PropsWithChildren<Props>> = (props) => {
  const { hideWrapping, children } = props

  const showFullLogo = useBreakpoint('xs')

  return (

    <main
      className={classNames(
        '[background:radial-gradient(400px_320px_at_0%_0%,_rgba(194,244,255,0.08)_0%,_rgba(234,0,14,0)_100%,_rgba(131,0,234,0)_100%)]',
        '[--side-w:14rem] md:[--side-w:16rem] lg:[--side-w:18rem] xl:[--side-w:21rem] 2xl:[--side-w:24rem]',
        'tw-h-screen tw-p-[--p-main] tw-overflow-auto tw-grid-main sm:tw-grid-cols-[minmax(var(--side-w),_1fr)_minmax(0,_4fr)_minmax(var(--side-w),_1fr)] sm:tw-grid-rows-[auto_auto_minmax(0,_1fr)_auto]',
        '',
      )}
    >
      {hideWrapping
        ? null
        : (
          <div className="tw-inline-flex sm:tw-row-[1] sm:tw-col-[1/3] lg:tw-col-[1]">
            <LogoLink short={!showFullLogo} className="hover:tw-scale-zoom xs:hover:tw-scale-normal tw--m-1 xs:tw-m-0" />
          </div>
          )
      }

      {children}

      {hideWrapping
        ? null
        : (
          <AppFooter className="sm:tw-row-[4] sm:tw-col-[1/3]" />
          )
      }
    </main>
  )
}
