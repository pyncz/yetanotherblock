import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetServerSideProps, NextPage } from 'next'
import i18nextConfig from '../../next-i18next.config'
import { HeadMeta, TokensSection, TrendingCollectionsSection } from '../components'

export const getServerSideProps: GetServerSideProps = async ({
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

const Home: NextPage = () => {
  const { i18n } = useTranslation()

  return (
    <>
      <HeadMeta
        title={i18n.t('pages.index.title')}
        description={i18n.t('pages.index.description')}
      />

      <div className="sm:tw-sticky tw-top-0 sm:tw-col-[3] sm:tw-row-[1/5]">
        <TrendingCollectionsSection />
      </div>

      <div className="lg:tw-sticky tw-top-0 sm:tw-col-[1/3] lg:tw-col-[2] sm:tw-row-[3] lg:tw-row-[1/5] lg:tw-min-h-full">
        <TokensSection />
      </div>
    </>
  )
}

export default Home
