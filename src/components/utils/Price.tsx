import { formatUnits } from 'viem'
import type { FC } from 'react'
import { useMemo } from 'react'
import type { AssetData } from '../../models'

type Props = AssetData & {
  value: string | number
  fixTo?: number
}

export const Price: FC<Props> = (props) => {
  const {
    value,
    symbol,
    decimals = 1,
    fixTo = 2,
  } = props

  const formattedValue = useMemo<string>(() => {
    try {
      // BigNumberish, i.e. an integer
      const bnValue = BigInt(value)
      return decimals === 1
        ? formatUnits(bnValue, decimals)
        : bnValue.toString()
    } catch (e) {
      // not an integer
      return Number(value).toFixed(fixTo)
    }
  }, [value, decimals, fixTo])

  return (
    <>{formattedValue} {symbol}</>
  )
}
