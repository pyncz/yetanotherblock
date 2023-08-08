import type { FC, PropsWithChildren } from 'react'
import { LayoutBase } from './base/LayoutBase'

export const LayoutMessage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <LayoutBase>
      <div className="tw-pb-20 tw-flex-1 tw-flex-center-y">
        <div className="tw-py-8 tw-flex-center-x tw-w-full">
          {children}
        </div>
      </div>
    </LayoutBase>
  )
}
