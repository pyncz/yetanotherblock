import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { ErrorView, HeadMeta } from '../components'
import i18nextConfig from '../../next-i18next.config'
import type { NextPageWithLayout } from '../models'
import { LayoutMessage } from '../layouts'

export const getStaticProps: GetStaticProps = async ({
  locale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? i18nextConfig.i18n.defaultLocale, [
        'common',
      ])),
    },
  }
}

const NotFound: NextPageWithLayout = () => {
  const { i18n } = useTranslation()

  return (
    <>
      <HeadMeta pageTitle={i18n.t('errors.notFound')} />

      <ErrorView
        code={404}
        title={i18n.t('errors.notFound')}
        description={i18n.t('errors.notFoundMessage')}
      />
    </>
  )
}

NotFound.Layout = LayoutMessage

export default NotFound
