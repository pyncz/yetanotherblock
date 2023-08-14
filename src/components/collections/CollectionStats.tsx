import classNames from 'classnames'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import type { PropsWithClassName } from '../../models'

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
        'tw-bg-pure tw-text-dim-1 tw-relative tw-inline-block tw-text-sm',
        appearance === 'inline'
          ? 'tw-p-3'
          : 'tw-bg-opacity-soft tw-border tw-border-base tw-border-opacity-20 tw-rounded-sm tw-px-2 tw-py-1.5',
        className,
      )}
    >
      <small className="tw-flex tw-text-dim-3 tw-text-3/4">{i18n.t('totalVolume')}</small>
      <p>{volume} <span className="tw-text-7/8 tw-text-dim-2">ETH</span></p>
    </div>
  )
}
