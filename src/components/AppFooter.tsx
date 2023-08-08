import type { FC } from 'react'
import { useTranslation } from 'next-i18next'
import type { PropsWithClassName } from '../models'
import { getYearsFrom } from '../utils'
import { ExternalLink } from './ExternalLink'

export const AppFooter: FC<PropsWithClassName> = ({ className }) => {
  const { i18n } = useTranslation()
  const years = getYearsFrom(2023)

  return (
    <footer className={className}>
      <p className="tw-text-xs tw-text-dim-3">
        <span>{years}.</span>{' '}
        <span>{i18n.t('madeBy')}</span>{' '}
        <ExternalLink
          href="https://github.com/pyncz"
        >pyncz</ExternalLink>
      </p>
    </footer>
  )
}
