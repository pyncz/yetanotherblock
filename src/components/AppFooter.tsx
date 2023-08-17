import type { FC } from 'react'
import { useTranslation } from 'next-i18next'
import classNames from 'classnames'
import type { PropsWithClassName } from '../models'
import { getYearsFrom } from '../utils'
import { ExternalLink } from './ExternalLink'
import { ThemeRadio } from './theme'
import { ClientOnly } from './utils'

export const AppFooter: FC<PropsWithClassName> = ({ className }) => {
  const { i18n } = useTranslation()
  const years = getYearsFrom(2023)

  return (
    <footer className={classNames('tw-flex tw-items-center tw-gap-2', className)}>
      <ClientOnly>
        <ThemeRadio />
      </ClientOnly>

      <p className="tw-text-xs tw-text-x4">
        <span>{years}.</span>{' '}
        <span>{i18n.t('madeBy')}</span>{' '}
        <ExternalLink
          href="https://github.com/pyncz"
        >pyncz</ExternalLink>
      </p>
    </footer>
  )
}
