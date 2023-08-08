import type { FC, PropsWithChildren } from 'react'
import { createContext, useContext } from 'react'
import Image from 'next/image'
import { useConnect } from 'wagmi'
import { useTranslation } from 'next-i18next'
import type { Connector } from 'wagmi'
import classNames from 'classnames'
import type { PropsWithClassName } from '../../models'
import { Spinner } from '../ui'

interface Context {
  name?: string
}

interface RootProps {
  name: string
  connector: Connector
  autoFocus?: boolean
  withSubtitle?: boolean
}

const ConnectOptionContext = createContext<Context>({
  name: undefined,
})

interface CardProps {
  logo: string
  branded?: boolean
}

const Card: FC<PropsWithClassName<PropsWithChildren<CardProps>>> = (props) => {
  const { logo, className, branded } = props
  const { i18n } = useTranslation()

  const name = useContext(ConnectOptionContext).name

  return (
    <div
      className={classNames(
        '[--accent:rgb(var(--bg-dim-1))] tw-shadow-[--accent]',
        'tw-bg-dim-1 group-hover/card:tw-bg-dim-2 tw-duration-normal tw-rounded-lg tw-p-2 tw-flex-center tw-relative tw-overflow-hidden tw-shadow-connect tw-border-opacity-10',
        'tw-ring tw-ring-offset-2 tw-ring-opacity-muted tw-ring-offset-[rgb(var(--bg-base))] tw-ring-[transparent] group-focus/card:tw-ring-[--accent]',
        'before:tw-absolute before:tw--inset-[1rem] before:tw-blur-[1rem] before:tw-animate-slowSpin hover:before:tw-scale-zoom',
        { 'tw-p-6 tw-border !tw-bg-[--accent] tw-border-[--accent]': branded },
        className,
      )}
    >
      <div
        className={classNames(
          'tw-flex-center tw-inline-flex tw-duration-normal tw-relative group-hover/card:tw-scale-zoom group-focus/card:tw-scale-zoom',
          { 'tw-circle-20 tw-bg-dim-3': branded },
        )}
      >
        <Image
          src={logo}
          alt={name ? i18n.t('logo', { name }) : ''}
          height={48}
          width={48}
        />
      </div>
    </div>
  )
}

const Root: FC<PropsWithClassName<PropsWithChildren<RootProps>>> = (props) => {
  const { name, autoFocus, children, connector, className, withSubtitle } = props

  const { connect, isLoading, pendingConnector } = useConnect()

  return (
    <button
      className={classNames(
        '!tw-outline-none tw-text-center tw-rounded-lg tw-group/card tw-space-y-4 tw-cursor-pointer disabled:tw-pointer-events-none disabled:tw-opacity-muted',
        className,
      )}
      disabled={!connector.ready}
      autoFocus={autoFocus}
      onClick={() => connect({ connector })}
    >
      <ConnectOptionContext.Provider value={{ name }}>
        {children}
      </ConnectOptionContext.Provider>

      {withSubtitle
        ? (
          <div className="tw-flex-center-x">
            <h5 className="tw-duration-normal tw-px-2 tw-py-1 tw-rounded-sm tw-bg-dim-2 tw-text-dim-2 group-hover/card:tw-bg-dim-3 group-hover/card:tw-scale-zoom tw-relative group-hover/card:tw-text-dim-1 group-focus/card:tw-bg-dim-3 group-focus/card:tw-text-dim-1">
              {name}
              {isLoading && pendingConnector?.id === connector.id
                ? <>{' '}<Spinner /></>
                : null
              }
            </h5>
          </div>
          )
        : null
      }
    </button>
  )
}

export const ConnectOption = { Root, Card }
