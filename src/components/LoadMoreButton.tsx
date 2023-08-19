import { forwardRef } from 'react'
import type { PropsWithChildren } from 'react'
import { useTranslation } from 'next-i18next'
import classNames from 'classnames'
import type { ButtonProps, PropsWithClassName } from '../models'
import { ControlButton } from './ui'

interface Props extends Omit<ButtonProps, 'onClick'> {
  fetchNextPage: () => void
  hasNextPage?: boolean
}

export const LoadMoreButton = forwardRef<HTMLButtonElement, PropsWithChildren<PropsWithClassName<Props>>>((props, ref) => {
  const {
    fetchNextPage,
    hasNextPage = true,
    children,
    className,
    ...buttonProps
  } = props

  const { i18n } = useTranslation()

  return hasNextPage
    ? (
      <ControlButton
        ref={ref}
        {...buttonProps}
        className={classNames('tw-mt-4 sm:tw-mt-2 tw-text-3/4', className)}
        onClick={fetchNextPage}
      >
        {children ?? i18n.t('loadMore')}
      </ControlButton>
      )
    : null
})

LoadMoreButton.displayName = 'LoadMoreButton'
