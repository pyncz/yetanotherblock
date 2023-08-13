import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetServerSideProps, NextPage } from 'next'
import { useCollections } from '@reservoir0x/reservoir-kit-ui'
import i18nextConfig from '../../next-i18next.config'
import { ClientOnly, HeadMeta } from '../components'
import { env } from 'src/env/client.mjs'

export const getServerSideProps: GetServerSideProps = async ({
  locale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? i18nextConfig.i18n.defaultLocale, [
        'common',
      ])),
    },
  }
}

const Home: NextPage = () => {
  const { i18n } = useTranslation()

  const { data: collections, fetchNextPage, hasNextPage } = useCollections({
    collectionsSetId: env.NEXT_PUBLIC_RESERVOIRE_COLLECTION_SET_ID,
  })

  return (
    <>
      <HeadMeta
        title={i18n.t('pages.index.title')}
        description={i18n.t('pages.index.description')}
      />

      <div className="lg:tw-sticky tw-top-0 sm:tw-col-[3] sm:tw-row-[1/5]">
        <div className="tw-p-4 tw-border tw-border-[cyan]">
          right bar
          <div className="tw-grid tw-gap-4">
            {collections.map((collection) => (
              <div key={collection.id}>
                {collection.name}
              </div>
            ))}
          </div>
          {hasNextPage
            ? <button onClick={fetchNextPage}>Load more</button>
            : null
          }
        </div>
      </div>

      <div className="lg:tw-sticky tw-top-0 tw-h-full sm:tw-col-[1/3] lg:tw-col-[2] sm:tw-row-[3] lg:tw-row-[1/5]">
        <div className="tw-bg-[blue] tw-h-full">
          main content
        </div>
      </div>
    </>
  )
}

export default Home
