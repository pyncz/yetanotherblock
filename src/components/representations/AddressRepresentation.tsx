import type { FC } from 'react'
import { useMemo } from 'react'
import classNames from 'classnames'
import type { AddressProps, PropsWithClassName } from '../../models'
import { formatAddress } from '../../utils'

export const AddressRepresentation: FC<PropsWithClassName<AddressProps>> = (props) => {
  const { address, ensName, className } = props

  const formattedAddress = useMemo(() => {
    return formatAddress(address)
  }, [address])

  return (
    <span className={classNames('tw-font-mono', className)}>
      {ensName ?? formattedAddress}
    </span>
  )
}
