import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetServerSideProps, NextPage } from 'next'
import { useAccount } from 'wagmi'
import i18nextConfig from '../../next-i18next.config'
import { ClientOnly, ConnectForm, ConnectedState, HeadMeta } from '../components'
import { LayoutMessage } from '../layouts'

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
  const { isConnected } = useAccount()

  return (
    <>
      <HeadMeta
        title={i18n.t('pages.index.title')}
        description={i18n.t('pages.index.description')}
      />

      <ClientOnly>
        <LayoutMessage>
          {
            isConnected
              ? <ConnectedState className="xs:tw-max-w-sm" />
              : <ConnectForm className="md:tw-max-w-2xl" />
          }
        </LayoutMessage>
      </ClientOnly>
    </>
  )
}

export default Home
