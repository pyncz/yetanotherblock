import type { FC } from 'react'
import classNames from 'classnames'
import type { PropsWithClassName } from '../models'

export const LogoSpinner: FC<PropsWithClassName> = ({ className }) => {
  return (
    <div className={classNames('tw-rounded-full tw-inline-block tw-overflow-hidden', className)}>
      <div
        className={classNames(
          '[--mask-border:13%] tw-mask-radial tw-mask-from-0 tw-mask-via-0 tw-mask-to-full tw-mask-point-via-[--mask-border] tw-mask-point-to-[calc(var(--mask-border)+1px)] tw-animate-swing [--swing-angle:2deg] [animationDuration:300ms]',
          '[--bg:--black] tw-relative tw-size-[7em] [background:conic-gradient(rgba(var(--white),0)_30%,_rgba(var(--white),0.4)_38%,_rgba(var(--white),0)_46%),_linear-gradient(rgb(var(--bg)),_rgb(var(--bg)))]',
          'before:tw-absolute before:tw-inset-0 before:[background:repeating-radial-gradient(rgba(var(--bg),0)_,rgb(var(--bg))_3px_,rgb(var(--bg),0)_4px)]',
          '[--accent:--accent-primary-lighten] after:tw-z-muted after:tw-animate-spin after:[animationDuration:4s] after:[--swing-angle:30deg] after:tw-absolute after:tw-inset-0 after:tw-bg-[conic-gradient(rgba(var(--accent),0)_26%,_rgba(var(--accent),0.25)_38%,_rgba(var(--accent),0)_50%)]',
        )}
      >
        <div className="tw-circle-[40%] tw-bg-white tw-absolute tw-top-1/2 tw-left-1/2 tw--translate-x-1/2 tw--translate-y-1/2" />
      </div>
    </div>
  )
}
