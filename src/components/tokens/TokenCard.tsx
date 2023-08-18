import type { useTokens } from '@reservoir0x/reservoir-kit-ui'
import type { FC } from 'react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import classNames from 'classnames'
import type { PropsWithClassName } from '../../models'
import { Price } from '../Price'
import { useSongMetadata } from '../../hooks'
import { ButtonLink } from '../ui'

type TokenCardAppearance = 'full' | 'compact'
type Props = ReturnType<typeof useTokens>['data'][number] & {
  appearance?: TokenCardAppearance
}

export const TokenCard: FC<PropsWithClassName<Props>> = (props) => {
  const { i18n } = useTranslation()
  const { token, market, appearance = 'full', className } = props

  const isCompactView = appearance === 'compact'
  const { index, supply, name } = useSongMetadata(token?.name)

  const MarketplaceIcon = market?.floorAsk?.source?.icon
    ? (
      <Image
        width={20}
        height={20}
        src={market.floorAsk.source.icon as string}
        alt={market.floorAsk.source.name as string ?? i18n.t('buy')}
      />
      )
    : null

  return (
    <div
      className={classNames(
        'tw-group/card',
        'tw-duration-slow tw-bg-[rgb(var(--bg-card))] tw-rounded tw-flex tw-gap-3',
        'tw-border tw-border-x1 tw-border-opacity-10',
        'hover:tw-duration-fast hover:tw-bg-[rgb(var(--bg-card-active))]',
        isCompactView
          ? 'tw-p-2'
          : 'tw-flex-col tw-p-cardPadding',
        className,
      )}
    >
      <div
        className={classNames(
          'tw-bg-x4 tw-rounded-sm tw-overflow-hidden tw-relative',
          isCompactView
            ? 'tw-strict-size-12'
            : 'tw-w-full tw-aspect-square',
        )}
      >
        {token?.imageSmall
          ? (
            <Image
              fill
              src={token?.imageSmall}
              alt={token?.name ?? i18n.t('tokenImage')}
            />
            )
          : null
        }
      </div>

      <div
        className={classNames(
          'tw-flex-1 tw-flex tw-gap-3 tw-flex-wrap',
          { 'tw-flex-col': !isCompactView },
        )}
      >
        <div
          className={classNames(
            'tw-flex-1 tw-flex tw-flex-col',
            { 'tw-justify-center': isCompactView },
          )}
        >
          <div
            className={classNames(
              'tw-font-header tw-leading-sm',
              isCompactView
                ? 'tw-line-clamp-1 tw-mb-px'
                : 'tw-line-clamp-3 tw-mb-1',
            )}
          >
            {name}
          </div>

          <div className="tw-flex tw-flex-wrap tw-text-xs tw-gap-x-2 tw-text-x3">
            {market?.floorAsk?.price?.amount?.decimal
              ? (
                <Price
                  amount={market.floorAsk.price.amount.decimal}
                  currencySymbol={market.floorAsk.price.currency?.symbol}
                />
                )
              : null
            }
            {supply && index
              ? <div>{index}/{supply}</div>
              : null
            }
          </div>
        </div>

        {market?.floorAsk?.source?.url
          ? (
            <div
              className={classNames(
                'tw-flex tw-duration-fast tw-gap-2 tw-items-center',
                isCompactView
                  ? 'sm:tw-hidden sm:tw-opacity-0 sm:group-hover/card:tw-flex sm:group-hover/card:tw-opacity-full'
                  : 'tw-w-full',
              )}
            >
              {MarketplaceIcon && isCompactView
                ? MarketplaceIcon
                : null
              }
              <ButtonLink
                targetBlank
                href={market.floorAsk.source.url as string}
                className="tw-text-sm tw-h-8 tw-flex-1"
              >
                <span className="tw-hidden sm:tw-inline">{i18n.t('buyNow')}</span>
                <span className="sm:tw-hidden">{i18n.t('buy')}</span>
                {MarketplaceIcon && !isCompactView
                  ? MarketplaceIcon
                  : null
                }
              </ButtonLink>
            </div>
            )
          : null
        }
      </div>
    </div>
  )
}
