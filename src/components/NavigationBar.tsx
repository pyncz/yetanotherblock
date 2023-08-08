import type { FC } from 'react'
import { Icon } from '@iconify-icon/react'
import menuIcon from '@iconify/icons-iconoir/menu'
import { useAccount } from 'wagmi'
import classNames from 'classnames'
import { useBreakpoint } from '../hooks'
import type { PropsWithClassName } from '../models'
import { LogoLink } from './LogoLink'
import { ConnectedState } from './ConnectedState'
import { ConnectButton } from './connect'
import { AppFooter } from './AppFooter'

export const NavigationBar: FC<PropsWithClassName> = (props) => {
  const { className } = props
  const showFullLogo = useBreakpoint('sm')

  const { isConnected } = useAccount()

  return (
    <aside
      className={classNames(
        'tw-p-4 tw-flex tw-flex-col',
        className,
      )}
    >
      <div className="tw-rounded-lg tw-p-4 tw-bg-[rgba(var(--bg-sidebar),_var(--tw-bg-opacity))] tw-bg-opacity-muted tw-backdrop-blur-sm sm:tw-bg-opacity-full tw-flex-1 tw-flex tw-justify-between tw-items-center sm:tw-items-start sm:tw-flex-col tw-shadow-[0_0_1rem_rgb(var(--bg-base))] sm:tw-shadow-none">
        {/* Start */}
        <nav>
          <div className="tw-flex sm:tw-py-2">
            <LogoLink short={!showFullLogo} />
          </div>
        </nav>

        {/* End */}
        {/* - sidebar's bottom */}
        <div className="tw-hidden tw-gap-y-3 tw-w-full sm:tw-flex tw-flex-col">
          {isConnected
            ? <ConnectedState />
            : <ConnectButton />
          }
          <AppFooter />
        </div>
        {/* - mobile navbar's end */}
        <div className="sm:tw-hidden">
          <Icon icon={menuIcon} />
        </div>
      </div>
    </aside>
  )
}
