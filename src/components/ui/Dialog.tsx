import * as RadixDialog from '@radix-ui/react-dialog'
import type { FC, PropsWithChildren, ReactNode } from 'react'
import { Icon } from '@iconify-icon/react'
import closeIcon from '@iconify/icons-iconoir/cancel'
import { useTranslation } from 'next-i18next'

interface Props {
  trigger: ReactNode
  title?: string
  description?: string
}

export const Dialog: FC<PropsWithChildren<Props>> = (props) => {
  const { children, trigger, title, description } = props

  const { i18n } = useTranslation()

  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger asChild>
        {trigger}
      </RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="tw-bg-dim-3 tw-bg-opacity-muted tw-fixed tw-inset-0 tw-animate-fadeIn" />
        <RadixDialog.Content className="tw-outline-none tw-rounded-xl tw-overflow-auto tw-p-8 tw-shadow-popup tw-bg-base tw-animate-popUp tw-fixed tw-top-1/2 tw-left-1/2 tw--translate-x-1/2 tw--translate-y-1/2 tw-w-full tw-max-w-md tw-max-h-[80vh]">
          {title || description
            ? (
              <div className="tw-space-y-4 tw-pb-5">
                {title
                  ? (
                    <RadixDialog.Title className="tw-text-center tw-h3">
                      {title}
                    </RadixDialog.Title>
                    )
                  : null
                }
                {description
                  ? (
                    <RadixDialog.Description className="tw-text-center tw-text-dim-2 tw-text-sm tw-pb-3">
                      {description}
                    </RadixDialog.Description>
                    )
                  : null
                }
              </div>
              )
            : null
          }

          {children}

          <RadixDialog.Close asChild>
            <button
              aria-label={i18n.t('close')}
              className="tw-link tw-link-muted tw-border tw-circle-6 tw-absolute tw-right-3 tw-top-3 tw-flex-center tw-border-opacity-muted focus:tw-border-opacity-full"
            >
              <Icon icon={closeIcon} />
            </button>
          </RadixDialog.Close>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  )
}
