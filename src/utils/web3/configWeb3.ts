import type { Chain } from 'wagmi'
import { configureChains, createConfig } from 'wagmi'

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

import { env } from '../../env/client.mjs'
import { getAppBaseUrl } from '..'

export const configWeb3 = (chains: Chain[]) => {
  const baseUrl = getAppBaseUrl()

  const { publicClient, webSocketPublicClient } = configureChains(
    chains,
    [
      alchemyProvider({ apiKey: env.NEXT_PUBLIC_ALCHEMY_API_KEY }),
      publicProvider(),
    ],
  )

  return createConfig({
    autoConnect: true,
    connectors: [
      new WalletConnectConnector({
        chains,
        options: {
          projectId: env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
          metadata: {
            name: 'yetanotherblock',
            description: 'Demo app based on anotherblock.io - INVESTING IN MUSIC MADE EASY',
            url: baseUrl,
            icons: [`${baseUrl}/img/logo-icon.svg`],
          },
        },
      }),
      new MetaMaskConnector({ chains }),
      new CoinbaseWalletConnector({
        chains,
        options: {
          appName: 'yetanotherblock',
        },
      }),
    ],
    publicClient,
    webSocketPublicClient,
  })
}
