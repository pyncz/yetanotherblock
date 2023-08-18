import { useRef } from 'react'
import type { FC } from 'react'
import type { useCollections } from '@reservoir0x/reservoir-kit-ui'
import classNames from 'classnames'
import { useBreakpoint, useImageAccentColor, useSongMetadata } from '../../hooks'
import type { PropsWithClassName } from '../../models'
import { CollectionStats } from './CollectionStats'
import { CollectionCover } from './CollectionCover'
import { CollectionLink } from './CollectionLink'

interface Props {
  collection: ReturnType<typeof useCollections>['data'][number]
}

export const CollectionCard: FC<PropsWithClassName<Props>> = (props) => {
  const { collection, className } = props
  const showStatsAsOverlay = useBreakpoint('sm')

  const { name, artist, summary } = useSongMetadata(collection.name)

  const coverImageRef = useRef<HTMLImageElement>(null)
  const accentColor = useImageAccentColor(coverImageRef)

  return (
    <CollectionLink address={collection.id}>
      <div
        className={classNames(
          'dark-mode',
          'tw-text-x1 tw-relative tw-w-full tw-duration-normal hover:tw-scale-zoom',
          className,
        )}
      >
        <CollectionCover
          src={collection.banner}
          alt={''}
          className="tw-z-muted tw-blur-sm tw-opacity-0 sm:tw-opacity-20 sm:tw-rounded-lg"
        />
        <div
          className={classNames(
            'tw-absolute tw-overflow-hidden tw-inset-0 sm:tw-rounded',
            'tw-border tw-border-x1 tw-border-opacity-10',
            'before:tw-absolute before:tw-bg-gradient-to-t before:tw-from-[rgba(var(--bg-x0),0.7)] before:tw-to-[rgba(var(--bg-x0),0.3)] before:tw-inset-0',
          )}
        >
          <CollectionCover
            ref={coverImageRef}
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

          <div className="tw-absolute tw-bottom-cardPadding tw-inset-x-cardPadding tw-uppercase">
            {artist
              ? (
                <div
                  className="tw-line-clamp-2 tw-text-xs"
                  style={{ color: accentColor ?? 'rgb(var(--text-x3))' }}
                >
                  {artist}
                </div>
                )
              : null
            }
            <div className="tw-px-px tw-font-header tw-font-bold tw-line-clamp-2">
              {name ?? summary}
            </div>
          </div>
        </div>
      </div>
    </CollectionLink>
  )
}
