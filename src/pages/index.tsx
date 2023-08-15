import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetServerSideProps, NextPage } from 'next'
import { useCollections } from '@reservoir0x/reservoir-kit-ui'
import i18nextConfig from '../../next-i18next.config'
import { CollectionCard, ControlButton, HeadMeta, Section } from '../components'
import { env } from '../env/client.mjs'
import { DEFAULT_PAGINATION_LIMIT } from '../consts'

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
    limit: DEFAULT_PAGINATION_LIMIT,
    sortBy: '30DayVolume',
  })

  return (
    <>
      <HeadMeta
        title={i18n.t('pages.index.title')}
        description={i18n.t('pages.index.description')}
      />

      <div className="lg:tw-sticky tw-top-0 sm:tw-col-[3] sm:tw-row-[1/5]">
        <Section
          title={i18n.t('trendingCollections')}
        >
          <div className="tw-grid tw-grid-cols-1 xs:tw-grid-cols-2 sm:tw-grid-cols-1 tw-gap-3">
            {collections.map((collection) => (
              <CollectionCard
                className="tw-h-40 xs:tw-h-auto xs:tw-aspect-square sm:tw-h-36 sm:tw-aspect-auto"
                key={collection.id}
                collection={collection}
              />
            ))}
          </div>
          {hasNextPage
            ? (
              <ControlButton
                className="tw-mt-4 sm:tw-mt-2 tw-text-3/4"
                onClick={fetchNextPage}
              >
                {i18n.t('loadMore')}
              </ControlButton>
              )
            : null
          }
        </Section>
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
