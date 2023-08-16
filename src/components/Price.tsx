import type { FC } from 'react'
import type { PropsWithClassName } from '../models'

interface Props {
  amount: number | string | bigint
  currencySymbol?: string
}

export const Price: FC<PropsWithClassName<Props>> = (props) => {
  const { currencySymbol, amount, className } = props

  return (
    <div className={className}>
      {amount.toString()}

      {currencySymbol
        ? (
          <span className="tw-text-7/8 tw-pl-1 tw-text-dim-2">
            {currencySymbol}
          </span>
          )
        : null
      }
    </div>
  )
}
