import type { useTokens } from '@reservoir0x/reservoir-kit-ui'
import type { FC } from 'react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import classNames from 'classnames'
import type { PropsWithClassName } from '../../models'
import { Price } from '../Price'
import { useSongMetadata } from 'src/hooks'

type TokenCardAppearance = 'full' | 'compact'
type Props = ReturnType<typeof useTokens>['data'][number] & {
  appearance?: TokenCardAppearance
}

export const TokenCard: FC<PropsWithClassName<Props>> = (props) => {
  const { i18n } = useTranslation()
  const { token, market, appearance = 'full', className } = props

  const { index, supply, name } = useSongMetadata(token?.name)

  return (
    <div
      className={classNames(
        'tw-duration-fast tw-bg-dim-1 tw-rounded tw-flex tw-gap-3',
        'tw-border tw-border-base tw-border-opacity-10',
        'hover:tw-duration-slow hover:tw-bg-dim-2',
        appearance === 'compact'
          ? 'tw-p-2 tw-items-center'
          : 'tw-flex-col tw-p-cardPadding',
        className,
      )}
    >
      <div
        className={classNames(
          'tw-bg-dim-3 tw-rounded-sm tw-overflow-hidden tw-relative',
          appearance === 'compact'
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

      <div>
        <div
          className={classNames(
            'tw-font-header tw-leading-sm',
            appearance === 'compact'
              ? 'tw-line-clamp-1 tw-mb-px'
              : 'tw-line-clamp-3 tw-mb-1',
          )}
        >
          {name}
        </div>

        <div className="tw-flex tw-flex-wrap tw-text-xs tw-gap-x-2 tw-text-dim-2">
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
    </div>
  )
}
