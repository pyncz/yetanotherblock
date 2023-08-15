import { forwardRef } from 'react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import classNames from 'classnames'
import type { PropsWithClassName } from '../../models'

interface Props {
  src?: string
  alt?: string
}

export const CollectionCover = forwardRef<HTMLImageElement, PropsWithClassName<Props>>((props, ref) => {
  const { src, alt, className } = props
  const { i18n } = useTranslation()

  return src
    ? (
      <Image
        ref={ref}
        crossOrigin="anonymous"
        fill
        className={classNames('tw-object-cover', className)}
        src={src}
        alt={alt ?? i18n.t('collectionCover')}
      />
      )
    : null
})

CollectionCover.displayName = 'CollectionCover'
