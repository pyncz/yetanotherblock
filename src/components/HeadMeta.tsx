import Head from 'next/head'
import type { FC, PropsWithChildren } from 'react'
import { useRouter } from 'next/router'
import { getAppBaseUrl } from '../utils'
import { APP_TWITTER_HANDLE } from '../consts'

interface Props {
  pageTitle?: string

  title?: string
  description?: string
  type?: string
  image?: string
  summary?: 'summary' | 'summary_large_image'
  twitterCreator?: `@${string}`
  twitterSite?: `@${string}`
}

export const HeadMeta: FC<PropsWithChildren<Props>> = (props) => {
  const {
    title,
    pageTitle = title,
    description,
    type = 'website',
    image,
    summary = 'summary_large_image',
    twitterCreator,
    twitterSite = `@${APP_TWITTER_HANDLE}`,

    children,
  } = props

  const router = useRouter()
  const baseUrl = getAppBaseUrl()

  const href = `${baseUrl}${router.asPath}`

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} key="description" />

      {/* opengraph meta */}
      <meta property="og:title" content={title} key="og-title" />
      <meta property="og:description" content={description} key="og-description" />
      <meta property="og:site_name" content="yetanotherblock" key="og-site_name" />
      <meta property="og:url" content={href} key="og-url" />
      <meta property="og:type" content={type} key="og-type" />
      {image ? <meta property="og:image" content={image} key="og-image" /> : null}

      {/* twitter meta */}
      <meta property="twitter:card" content={summary} key="twitter-card" />
      <meta property="twitter:title" content={title} key="twitter-title" />
      <meta property="twitter:description" content={description} key="twitter-description" />
      <meta property="twitter:url" content={href} key="twitter-url" />
      {twitterSite ? <meta property="twitter:site" content={twitterSite} key="twitter-site" /> : null}
      {twitterCreator ? <meta property="twitter:creator" content={twitterCreator} key="twitter-creator" /> : null}
      {image ? <meta property="twitter:image" content={image} key="twitter-image" /> : null}

      {children}
    </Head>
  )
}
