import type { FC } from 'react'
import { useTranslation } from 'next-i18next'
import { useConnect } from 'wagmi'
import { Button, Dialog, ErrorMessage } from '../ui'
import { ArrowNavigation } from '../utils'
import { ConnectOption } from './ConnectOption'

export const ConnectButton: FC = () => {
  const { i18n } = useTranslation()

  const { connectors, error } = useConnect()
  const [walletconnectConnector, metamaskConnector, coinbaseConnector] = connectors

  return (
    <Dialog
      title={i18n.t('connect')}
      trigger={
        <Button className="tw-text-sm">
          {i18n.t('connect')}
        </Button>
      }
    >
      <div className="tw-space-y-4">
        <ArrowNavigation className="tw-grid tw-items-center tw-gap-4 sm:tw-grid-cols-[repeat(3,_minmax(0,_1fr))] tw-pb-2">
          <ConnectOption.Root name="WalletConnect" connector={walletconnectConnector!} autoFocus>
            <ConnectOption.Card
              logo="/img/wallets/walletconnect.svg"
              className="[--accent:#03ACDA] tw-h-20 sm:tw-h-32"
            />
          </ConnectOption.Root>

          <ConnectOption.Root name="MetaMask" connector={metamaskConnector!}>
            <ConnectOption.Card
              logo="/img/wallets/metamask.svg"
              className="[--accent:#F6851B] tw-h-20 sm:tw-h-32"
            />
          </ConnectOption.Root>

          <ConnectOption.Root name="CoinBase" connector={coinbaseConnector!}>
            <ConnectOption.Card
              logo="/img/wallets/coinbase.svg"
              className="[--accent:#0052FF] tw-h-20 sm:tw-h-32"
            />
          </ConnectOption.Root>
        </ArrowNavigation>

        {error
          ? <ErrorMessage message={error.message} />
          : null
        }
      </div>
    </Dialog>
  )
}
