import Document, {
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import type { DocumentProps } from 'next/document'
import i18nextConfig from '../../next-i18next.config'
import { getAppBaseUrl } from '../utils'
import { APP_TWITTER_HANDLE } from '../consts'

type Props = DocumentProps

class AppDocument extends Document<Props> {
  render() {
    const currentLocale
      = this.props.__NEXT_DATA__.locale
      ?? i18nextConfig.i18n.defaultLocale

    const ogImage = `${getAppBaseUrl()}/img/cover.jpg`

    return (
      <Html lang={currentLocale} className="[--p-main:1rem] xs:[--p-main:1.5rem] md:[--p-main:2rem]">
        {/* default meta */}
        <Head>
          <meta property="og:site_name" content="yetanotherblock" key="og-site_name" />
          <meta property="og:image" content={ogImage} key="og-image" />
          <meta property="twitter:image" content={ogImage} key="twitter-image" />
          {APP_TWITTER_HANDLE
            ? <meta property="twitter:site" content={`@${APP_TWITTER_HANDLE}`} key="twitter-site" />
            : null
          }
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
