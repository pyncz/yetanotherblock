import type { FC, PropsWithChildren } from 'react'
import { useTranslation } from 'next-i18next'
import { LogoSpinner } from '../LogoSpinner'

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
            <div className="tw-max-w-sm tw-mx-auto tw-text-center tw-space-y-1">
              <div className="tw-space-y-6">
                <LogoSpinner className="tw-mx-auto tw-shadow-[0_2rem_3rem_-2rem_rgb(var(--color-pure))]" />
                {code
                  ? <h3 className="tw-text-accent-primary tw-font-mono">
                    {code}
                  </h3>
                  : null
                }
              </div>
              <div>
                <h2 className="tw-mb-4 tw-text-base">
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
