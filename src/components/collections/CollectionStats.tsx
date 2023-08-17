import classNames from 'classnames'
import type { FC } from 'react'
import { useTranslation } from 'next-i18next'
import type { PropsWithClassName } from '../../models'
import { Price } from '../Price'

interface Props {
  volume: number
  appearance?: 'overlay' | 'inline'
}

export const CollectionStats: FC<PropsWithClassName<Props>> = (props) => {
  const { appearance = 'inline', volume, className } = props
  const { i18n } = useTranslation()

  return (
    <div
      className={classNames(
        'tw-bg-x0 tw-text-x2 tw-relative tw-inline-block tw-text-sm',
        appearance === 'inline'
          ? 'tw-p-3'
          : 'tw-bg-opacity-soft tw-border tw-border-x2 tw-border-opacity-muted tw-rounded-sm tw-px-2 tw-py-1.5',
        className,
      )}
    >
      <small className="tw-flex tw-text-x4 tw-text-3/4">{i18n.t('totalVolume')}</small>
      <Price amount={volume} currencySymbol="ETH" />
    </div>
  )
}
