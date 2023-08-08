import type { FC, PropsWithChildren } from 'react'
import { LayoutBase } from './base/LayoutBase'

export const LayoutMain: FC<PropsWithChildren> = ({ children }) => {
  return (
    <LayoutBase>
      <div>
        Connect / connected state and navigation
      </div>
      <div>
        {children}
      </div>
    </LayoutBase>
  )
}
