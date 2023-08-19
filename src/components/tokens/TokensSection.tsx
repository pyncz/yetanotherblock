import type { FC } from 'react'
import { useTranslation } from 'next-i18next'
import { useTokens } from '@reservoir0x/reservoir-kit-ui'
import classNames from 'classnames'
import type { PropsWithClassName } from '../../models'
import { Section } from '../Section'
import { env } from '../../env/client.mjs'
import { DEFAULT_PAGINATION_LIMIT } from '../../consts'
import { LoadMoreButton } from '../LoadMoreButton'
import { Skeleton } from '../ui'
import { TokenCard } from './TokenCard'

export const TokensSection: FC<PropsWithClassName> = ({ className }) => {
  const { i18n } = useTranslation()

  const { data: tokens, fetchNextPage, hasNextPage, isLoading, isFetchingPage } = useTokens({
    collectionsSetId: env.NEXT_PUBLIC_RESERVOIRE_COLLECTION_SET_ID,
    limit: DEFAULT_PAGINATION_LIMIT,
    sortBy: 'floorAskPrice',
  })

  return (
    <Section
      className={className}
      title={i18n.t('tokens')}
    >
      <div
        className={classNames(
          'tw-grid tw-grid-cols-3 tw-gap-3',
          'child:tw-col-span-3',
          /* 1st */ 'xs:[&>*:first-child]:tw-row-span-2 xs:[&>*:first-child]:tw-col-span-2 sm:[&>*:first-child]:tw-row-span-1 sm:[&>*:first-child]:tw-col-span-1',
          /* 2nd */ 'xs:[&>*:nth-child(2)]:tw-col-span-1',
          /* 3rd */ 'xs:[&>*:nth-child(3)]:tw-col-span-1',
        )}
      >
        <Skeleton.Root loaded={!isLoading} updating={isFetchingPage}>
          <Skeleton.Element
            placeholder={(<>
              <Skeleton.Placeholder height="14rem" />
              <Skeleton.Placeholder height="14rem" />
              <Skeleton.Placeholder height="14rem" />
              <Skeleton.Placeholder height="4.125rem" />
              <Skeleton.Placeholder height="4.125rem" />
              <Skeleton.Placeholder height="4.125rem" />
              <Skeleton.Placeholder height="4.125rem" />
              <Skeleton.Placeholder height="4.125rem" />
            </>)}
            updatePlaceholder={(<>
              <Skeleton.Placeholder height="4.125rem" />
              <Skeleton.Placeholder height="4.125rem" />
              <Skeleton.Placeholder height="4.125rem" />
            </>)}
          >
            {tokens.map((tokenData, index) => {
              const isTopItem = index < 3
              return (
                <TokenCard
                  key={`${tokenData.token?.contract}:${tokenData.token?.tokenId}`}
                  {...tokenData}
                  appearance={isTopItem ? undefined : 'compact'}
                />
              )
            })}
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
