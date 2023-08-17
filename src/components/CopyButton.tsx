import type { FC, PropsWithChildren } from 'react'
import { Icon } from '@iconify-icon/react'
import copyIcon from '@iconify/icons-iconoir/copy'
import successIcon from '@iconify/icons-iconoir/check'
import classNames from 'classnames'
import type { PropsWithClassName } from '../models'
import { Copy } from './utils'

interface Props {
  value: string
}

export const CopyButton: FC<PropsWithChildren<PropsWithClassName<Props>>> = (props) => {
  const { children, value, className } = props

  return (
    <Copy
      value={value}
      render={({ copy, justCopied }) => (
        <button
          className={classNames('tw-inline-flex tw-link tw-link-muted', className)}
          title={value}
          onClick={copy}
        >
          {children
            ? <span className="tw-text-x2">{children}</span>
            : null
          }
          <Icon
            icon={justCopied ? successIcon : copyIcon}
            className="tw-relative tw-left-px tw-top-0.5"
          />
        </button>
      )}
    />
  )
}
