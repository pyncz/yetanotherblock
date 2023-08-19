import type { FC } from 'react'
import { useCollections } from '@reservoir0x/reservoir-kit-ui'
import { useTranslation } from 'next-i18next'
import { CollectionCard, LoadMoreButton, Section, Skeleton } from '..'
import { env } from '../../env/client.mjs'
import { DEFAULT_PAGINATION_LIMIT } from '../../consts'
import type { PropsWithClassName } from '../../models'

export const TrendingCollectionsSection: FC<PropsWithClassName> = ({ className }) => {
  const { i18n } = useTranslation()

  const { data: collections, fetchNextPage, hasNextPage, isFetchingPage, isLoading } = useCollections({
    collectionsSetId: env.NEXT_PUBLIC_RESERVOIR_COLLECTION_SET_ID,
    limit: DEFAULT_PAGINATION_LIMIT,
    sortBy: '30DayVolume',
  })

  return (
    <Section
      className={className}
      title={i18n.t('trendingCollections')}
    >
      <div className="tw-grid tw-grid-cols-1 xs:tw-grid-cols-2 sm:tw-grid-cols-1 tw-gap-3">
        <Skeleton.Root loaded={!isLoading} updating={isFetchingPage}>
          <Skeleton.Element
            placeholder={(<>
              <Skeleton.Placeholder height="10rem" />
              <Skeleton.Placeholder height="10rem" />
              <Skeleton.Placeholder height="10rem" />
              <Skeleton.Placeholder height="10rem" />
            </>)}
            updatePlaceholder={(<>
              <Skeleton.Placeholder height="10rem" />
              <Skeleton.Placeholder height="10rem" />
            </>)}
          >
            {collections.map((collection) => (
              <CollectionCard
                className="tw-h-40 xs:tw-h-auto xs:tw-aspect-square sm:tw-h-36 sm:tw-aspect-auto"
                key={collection.id}
                collection={collection}
              />
            ))}
          </Skeleton.Element>
        </Skeleton.Root>
      </div>

      <LoadMoreButton
        disabled={isLoading}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
      />
    </Section>
  )
}
