import type { FC, PropsWithChildren } from 'react'
import { useTranslation } from 'next-i18next'

interface Props {
  code?: number
  title?: string
  description?: string
  body?: string
}

export const ErrorView: FC<PropsWithChildren<Props>> = (props) => {
  const { i18n } = useTranslation()

  const {
    code,
    title = i18n.t('errors.unexpected'),
    description,
    body,
    children,
  } = props

  return (
    <>
      {/* Stretch the error error on all the available space */}
      <div className="tw-container tw-h-full tw-w-full tw-flex-center">
        <div role="alert" className="tw-space-y-8 tw-py-12 tw-max-w-xl">
          <div className="tw-space-y-1">
            <div className="tw-max-w-sm tw-mx-auto tw-text-center tw-space-y-4">
              {code
                ? <h3 className="tw-text-accent-primary">
                  {code}
                </h3>
                : null
              }
              <div>
                <h2 className="tw-mb-4">
                  {title}
                </h2>
                {description
                  ? (
                    <p className="tw-text-dim-2">
                      {description}
                    </p>
                    )
                  : null
                }
              </div>
            </div>

            {body
              ? (
                <pre className="tw-whitespace-pre-wrap tw-text-state-error tw-text-sm tw-bg-state-error tw-bg-opacity-10 tw-p-5 tw-rounded">
                  {body}
                </pre>
                )
              : null
            }
          </div>

          {children}
        </div>
      </div>
    </>
  )
}
