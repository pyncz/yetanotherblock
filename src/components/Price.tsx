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
          <span className="tw-text-7/8 tw-pl-[0.25em] tw-text-x3">
            {currencySymbol}
          </span>
          )
        : null
      }
    </div>
  )
}
