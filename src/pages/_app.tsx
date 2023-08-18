import { goerli, hardhat, mainnet, sepolia } from 'wagmi/chains'
import type { AppType } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { WagmiConfig } from 'wagmi'
import { ReservoirKitProvider } from '@reservoir0x/reservoir-kit-ui'
import type { AppPropsWithLayout, Chain } from '../models'
import { ChainsProvider, ColorModeProvider } from '../contexts'
import { ErrorBoundary } from '../components'
import { configWeb3 } from '../utils'
import { useFonts } from '../hooks'

import '../assets/styles/globals.scss'
import { env } from '../env/client.mjs'
import { LayoutMain, LayoutMessage } from '../layouts'

const App: AppType = ({ Component, pageProps }: AppPropsWithLayout) => {
  useFonts()

  // init web3
  const chains: Chain[] = env.NEXT_PUBLIC_ENV === 'production'
    ? [mainnet] // prod
    : env.NEXT_PUBLIC_ENV === 'test'
      ? [goerli, sepolia] // test
      : [goerli, sepolia, hardhat] // dev

  const config = configWeb3(chains)

  // Get per-page layout or use a default one
  const Layout = Component.Layout ?? LayoutMain

  return (
    <>
      {/* In case something goes wrong in the providers */}
      <ErrorBoundary fallbackWrapper={LayoutMessage}>

        <ReservoirKitProvider
          options={{
            chains: [{
              id: 1,
              baseApiUrl: 'https://api.reservoir.tools',
              active: true,
              apiKey: env.NEXT_PUBLIC_RESERVOIRE_API_KEY,
            }],
          }}
        >
          <ColorModeProvider>
            <ChainsProvider chains={chains}>
              <WagmiConfig config={config}>
                <Layout>

                  {/* In case something goes wrong in the page Component */}
                  <ErrorBoundary>
                    <Component {...pageProps} />
                  </ErrorBoundary>

                </Layout>
              </WagmiConfig>
            </ChainsProvider>
          </ColorModeProvider>
        </ReservoirKitProvider>

      </ErrorBoundary>
    </>
  )
}

export default appWithTranslation(App)
