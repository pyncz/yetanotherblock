import type { FC } from 'react'
import { Icon } from '@iconify-icon/react'
import arrowRight from '@iconify/icons-iconoir/arrow-right'
import arrowLeft from '@iconify/icons-iconoir/arrow-left'
import { useConnect } from 'wagmi'
import { useTranslation } from 'next-i18next'
import classNames from 'classnames'
import { ArrowNavigation, ErrorMessage, Key } from '..'
import type { PropsWithClassName } from '../../models'
import { useBreakpoint } from '../../hooks'
import { ConnectOption } from './ConnectOption'

export const ConnectForm: FC<PropsWithClassName> = ({ className }) => {
  const { i18n } = useTranslation()

  const { connectors, error } = useConnect()
  const [walletconnectConnector, metamaskConnector, coinbaseConnector] = connectors

  const showBrandedCards = useBreakpoint('sm')

  return (
    <div className={classNames('tw-space-y-10 tw-text-center tw-w-full', className)}>
      <h2>{i18n.t('connect')}</h2>
      <div className="tw-flex-center-y tw-gap-4 tw-group/select">
        <Key className="tw-hidden lg:tw-inline-flex tw-size-10 tw-opacity-0 group-focus-within/select:tw-opacity-full tw-mb-10" highlightOn={['ArrowLeft']}>
          <Icon icon={arrowLeft} />
        </Key>

        <ArrowNavigation className="tw-flex-1 tw-grid tw-items-center tw-gap-6 sm:tw-grid-cols-[repeat(3,_minmax(8rem,_1fr))]">
          <ConnectOption.Root
            name="WalletConnect"
            connector={walletconnectConnector!}
            withSubtitle
            autoFocus
          >
            <ConnectOption.Card
              logo="/img/wallets/walletconnect.svg"
              className="[--accent:#03ACDA] sm:before:tw-bg-walletconnect tw-h-20 sm:tw-h-56"
              branded={showBrandedCards}
            />
          </ConnectOption.Root>

          <ConnectOption.Root name="MetaMask" connector={metamaskConnector!} withSubtitle>
            <ConnectOption.Card
              logo="/img/wallets/metamask.svg"
              className="[--accent:#F6851B] sm:before:tw-bg-metamask tw-h-20 sm:tw-h-56"
              branded={showBrandedCards}
            />
          </ConnectOption.Root>

          <ConnectOption.Root name="CoinBase" connector={coinbaseConnector!} withSubtitle>
            <ConnectOption.Card
              logo="/img/wallets/coinbase.svg"
              className="[--accent:#0052FF] sm:before:tw-bg-coinbase tw-h-20 sm:tw-h-56"
              branded={showBrandedCards}
            />
          </ConnectOption.Root>
        </ArrowNavigation>

        <Key className="tw-hidden lg:tw-inline-flex tw-size-10 tw-opacity-0 group-focus-within/select:tw-opacity-full tw-mb-10" highlightOn={['ArrowRight']}>
          <Icon icon={arrowRight} />
        </Key>
      </div>

      {error
        ? <ErrorMessage message={error.message} />
        : null
      }
    </div>
  )
}
