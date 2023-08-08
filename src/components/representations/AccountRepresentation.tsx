import type { FC } from 'react'
import type { AddressProps, PropsWithClassName } from '../../models'
import { CopyButton } from '../CopyButton'
import { AddressRepresentation } from './AddressRepresentation'

export const AccountRepresentation: FC<PropsWithClassName<AddressProps>> = (props) => {
  const { address, className } = props

  return (
    <CopyButton className={className} value={address}>
      <AddressRepresentation {...props} />
    </CopyButton>
  )
}
