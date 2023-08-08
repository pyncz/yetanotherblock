import type { FC } from 'react'
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'
import { Icon } from '@iconify-icon/react'
import walletIcon from '@iconify/icons-iconoir/wallet'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import classNames from 'classnames'
import copyIcon from '@iconify/icons-iconoir/copy'
import successIcon from '@iconify/icons-iconoir/check'
import disconnectIcon from '@iconify/icons-iconoir/remove-link'
import type { PropsWithClassName } from '../models'
import { Dropdown, DropdownItem } from './ui'
import { AddressRepresentation } from './representations'
import { Copy } from './utils'

export const ConnectedState: FC<PropsWithClassName> = ({ className }) => {
  const { i18n } = useTranslation()

  const { address } = useAccount()

  const { data: ensName } = useEnsName({ address })
  const { data: ensAvatar } = useEnsAvatar({ name: ensName })
  const { disconnect, isLoading: isDisconnecting } = useDisconnect()

  if (address) {
    return (
      <Dropdown
        position="top"
        className={classNames(
          'tw-group/box tw-relative tw-flex tw-flex-col xs:tw-flex-row xs:tw-items-center',
          'before:tw-bg-dim-2 before:tw-rounded-lg before:tw-absolute before:tw-inset-1.5 before:tw-opacity-0 before:tw-duration-normal',
          'hover:before:tw-opacity-full hover:before:tw-inset-0',
          className,
        )}
        trigger={
          <button className="tw--m-1.5 tw-p-1.5 tw-inline-flex tw-items-center tw-gap-2 tw-flex-1 tw-ui-element">
            <div className="tw-relative tw-size-10 tw-rounded tw-bg-dim-3 tw-flex-center">
              {ensAvatar
                ? <Image src={ensAvatar} alt={i18n.t('ensAvatar')} fill />
                : <Icon icon={walletIcon} className="tw-text-dim-3 tw-text-lg tw-duration-slow group-hover/box:tw-text-dim-2 group-data-open/box:tw-text-dim-2" />
              }
            </div>
            <AddressRepresentation
              className="tw-relative tw-text-7/8 tw-text-dim-2 group-hover/box:tw-text-dim-1 group-data-open/box:tw-text-dim-1 tw-duration-normal"
              address={address}
              ensName={ensName}
            />
          </button>
        }
      >
        <Copy
          value={address}
          render={({ copy, justCopied }) => (
            <DropdownItem
              onClick={copy}
              icon={
                <Icon icon={justCopied ? successIcon : copyIcon} />
              }
            >
              {i18n.t('copyAddress')}
            </DropdownItem>
          )}
        />
        <DropdownItem disabled={isDisconnecting} onClick={() => disconnect()} icon={<Icon icon={disconnectIcon} />}>
          {i18n.t('disconnect')}
        </DropdownItem>
      </Dropdown>
    )
  }

  return null
}
