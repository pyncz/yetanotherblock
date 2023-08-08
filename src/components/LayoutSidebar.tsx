import type { FC, PropsWithChildren } from 'react'
import { NavigationBar } from '.'

export const LayoutSidebar: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="tw-grid sm:tw-grid-cols-[minmax(14rem,_1fr)_minmax(0,_4fr)] tw-items-start tw-layout">
      <NavigationBar className="tw-fixed sm:tw-sticky tw-inset-x-0 tw-top-0 tw-h-nav sm:tw-h-auto sm:tw-min-h-screen" />

      <main className="tw-p-4 tw-flex tw-flex-col tw-mt-nav sm:tw-min-h-screen sm:tw-sticky sm:tw-mt-0 sm:tw-top-0 sm:tw-px-6 md:tw-px-8 tw-overflow-hidden">
        {children}
      </main>
    </div>
  )
}
