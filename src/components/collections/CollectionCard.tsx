import type { FC } from 'react'
import type { useCollections } from '@reservoir0x/reservoir-kit-ui'
import classNames from 'classnames'
import { useBreakpoint } from '../../hooks'
import type { PropsWithClassName } from '../../models'
import { CollectionStats } from './CollectionStats'
import { CollectionCover } from './CollectionCover'

interface Props {
  collection: ReturnType<typeof useCollections>['data'][number]
}

export const CollectionCard: FC<PropsWithClassName<Props>> = (props) => {
  const { collection, className } = props
  const showStatsAsOverlay = useBreakpoint('sm')

  const summary = collection.name?.replace(/\s*\|\s*anotherblock/i, '')
  const [_, name, artist] = summary?.match(/^(.*)\sby\s(.*)$/i) ?? []

  return (
    <div className={classNames('tw-relative tw-w-full', className)}>
      <CollectionCover
        src={collection.banner}
        alt={''}
        className="tw-z-muted tw-blur-sm tw-opacity-0 sm:tw-opacity-20 sm:tw-rounded-lg"
      />
      <div
        className={classNames(
          'tw-absolute tw-overflow-hidden tw-inset-0 sm:tw-rounded tw-border tw-border-base tw-border-opacity-10',
          'before:tw-absolute before:tw-bg-gradient-to-t before:tw-from-[rgba(var(--bg-pure),0.7)] before:tw-to-[rgba(var(--bg-pure),0.3)] before:tw-inset-0',
        )}
      >
        <CollectionCover
          src={collection.banner}
          alt={collection.name}
          className="tw-z-muted tw-blur-px"
        />

        {collection.volume?.allTime
          ? (
            <CollectionStats
              appearance={showStatsAsOverlay ? 'overlay' : 'inline'}
              className={classNames({ 'tw-absolute tw-inset-2': showStatsAsOverlay })}
              volume={collection.volume.allTime}
            />
            )
          : null
        }

        <div className="tw-absolute tw-bottom-3 tw-inset-x-3 tw-uppercase">
          {artist
            ? <div className="tw-line-clamp-2 tw-text-xs tw-text-accent-primary">{artist}</div>
            : null
          }
          <div className={classNames('tw-px-px tw-font-header tw-font-bold', artist ? 'tw-line-clamp-1' : 'tw-line-clamp-2')}>
            {name ?? summary}
          </div>
        </div>
      </div>
    </div>
  )
}
