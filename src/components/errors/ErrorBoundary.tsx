import type { FC, PropsWithChildren } from 'react'
import type { FallbackProps } from 'react-error-boundary'
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'
import { useTranslation } from 'next-i18next'
import { Button } from '../ui'
import { ErrorView } from './ErrorView'

const ErrorFallbackContent: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  const { i18n } = useTranslation()

  return (
    <ErrorView body={error.message}>
      <Button type="button" onClick={resetErrorBoundary}>
        {i18n.t('refresh')}
      </Button>
    </ErrorView>
  )
}

interface Props {
  // Reset the state of your app so the error doesn't happen again
  onReset?: () => void
  fallbackWrapper?: FC<PropsWithChildren>
}

export const ErrorBoundary: FC<PropsWithChildren<Props>> = (props) => {
  const { onReset, children, fallbackWrapper } = props

  return (
    <ReactErrorBoundary
      FallbackComponent={(props) => {
        const content = ErrorFallbackContent(props)
        return fallbackWrapper?.({ children: content }) ?? content
      }}
      onReset={onReset}
    >
      {children}
    </ReactErrorBoundary>
  )
}
