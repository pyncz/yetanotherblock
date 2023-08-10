import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetServerSideProps, NextPage } from 'next'
import i18nextConfig from '../../next-i18next.config'
import { HeadMeta } from '../components'

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

      <div className="lg:tw-sticky tw-top-0 sm:tw-col-[3] sm:tw-row-[1/5]">
        <div className="tw-p-4 tw-border tw-border-[cyan]">
          right bar
          <div className="tw-grid tw-gap-4">
            <div className="tw-w-full tw-h-32 tw-bg-[cyan]" />
            <div className="tw-w-full tw-h-32 tw-bg-[cyan]" />
            <div className="tw-w-full tw-h-32 tw-bg-[cyan]" />
            <div className="tw-w-full tw-h-32 tw-bg-[cyan]" />
            <div className="tw-w-full tw-h-32 tw-bg-[cyan]" />
            <div className="tw-w-full tw-h-32 tw-bg-[cyan]" />
            <div className="tw-w-full tw-h-32 tw-bg-[cyan]" />
            <div className="tw-w-full tw-h-32 tw-bg-[cyan]" />
          </div>
        </div>
      </div>

      <div className="lg:tw-sticky tw-top-0 tw-h-full sm:tw-col-[1/3] lg:tw-col-[2] sm:tw-row-[3] lg:tw-row-[1/5]">
        <div className="tw-bg-[blue] tw-h-full">
          main content
        </div>
      </div>
    </>
  )
}

export default Home
