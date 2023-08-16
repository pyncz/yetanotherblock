import type { FC, PropsWithChildren } from 'react'
import { useTranslation } from 'next-i18next'
import classNames from 'classnames'
import type { PropsWithClassName } from '../models'
import { ControlButton } from './ui'

interface Props {
  fetchNextPage: () => void
  hasNextPage?: boolean
}

export const LoadMoreButton: FC<PropsWithChildren<PropsWithClassName<Props>>> = (props) => {
  const {
    fetchNextPage,
    hasNextPage = true,
    children,
    className,
  } = props

  const { i18n } = useTranslation()

  return hasNextPage
    ? (
      <ControlButton
        className={classNames('tw-mt-4 sm:tw-mt-2 tw-text-3/4', className)}
        onClick={fetchNextPage}
      >
        {children ?? i18n.t('loadMore')}
      </ControlButton>
      )
    : null
}
