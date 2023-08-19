import type { AppType } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { ReservoirKitProvider } from '@reservoir0x/reservoir-kit-ui'
import type { AppPropsWithLayout } from '../models'
import { ColorModeProvider } from '../contexts'
import { ErrorBoundary } from '../components'
import { useFonts } from '../hooks'

import '../assets/styles/globals.scss'
import { env } from '../env/client.mjs'
import { LayoutMain, LayoutMessage } from '../layouts'

const App: AppType = ({ Component, pageProps }: AppPropsWithLayout) => {
  useFonts()

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
              apiKey: env.NEXT_PUBLIC_RESERVOIR_API_KEY,
            }],
          }}
        >
          <ColorModeProvider>
            <Layout>

              {/* In case something goes wrong in the page Component */}
              <ErrorBoundary>
                <Component {...pageProps} />
              </ErrorBoundary>

            </Layout>
          </ColorModeProvider>
        </ReservoirKitProvider>

      </ErrorBoundary>
    </>
  )
}

export default appWithTranslation(App)
