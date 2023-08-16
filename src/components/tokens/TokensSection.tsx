import type { FC } from 'react'
import { useTranslation } from 'next-i18next'
import { useTokens } from '@reservoir0x/reservoir-kit-ui'
import classNames from 'classnames'
import type { PropsWithClassName } from '../../models'
import { Section } from '../Section'
import { env } from '../../env/client.mjs'
import { DEFAULT_PAGINATION_LIMIT } from '../../consts'
import { LoadMoreButton } from '../LoadMoreButton'
import { TokenCard } from './TokenCard'

export const TokensSection: FC<PropsWithClassName> = ({ className }) => {
  const { i18n } = useTranslation()

  const { data: tokens, fetchNextPage, hasNextPage } = useTokens({
    collectionsSetId: env.NEXT_PUBLIC_RESERVOIRE_COLLECTION_SET_ID,
    limit: DEFAULT_PAGINATION_LIMIT,
    sortBy: 'floorAskPrice',
  })

  return (
    <Section
      className={className}
      title={i18n.t('tokens')}
    >
      <div className="tw-grid tw-grid-cols-3 tw-gap-3">
        {tokens.map((tokenData, index) => {
          const isTopItem = index < 3
          const isFirstItem = index === 0

          return (
            <TokenCard
              key={tokenData.token?.tokenId}
              {...tokenData}
              appearance={isTopItem ? undefined : 'compact'}
              className={classNames(
                'tw-col-span-3',
                isTopItem
                  ? isFirstItem
                    ? 'xs:tw-row-span-2 xs:tw-col-span-2 sm:tw-row-span-1 sm:tw-col-span-1'
                    : 'xs:tw-col-span-1'
                  : undefined,
              )}
            />
          )
        })}
      </div>

      <LoadMoreButton
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
      />
    </Section>
  )
}
