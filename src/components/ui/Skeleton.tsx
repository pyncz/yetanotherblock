import type { FC, PropsWithChildren, ReactNode } from 'react'
import { createContext, useContext } from 'react'
import classNames from 'classnames'
import type { PropsWithClassName } from '../../models'

interface SkeletonContextType {
  loaded?: boolean
  updating?: boolean
}

interface SkeletonPlaceholderProps {
  as?: keyof JSX.IntrinsicElements
  size?: string | number
  height?: string | number
  width?: string | number
}

interface SkeletonElementProps extends SkeletonPlaceholderProps {
  placeholder?: ReactNode
  updatePlaceholder?: ReactNode
}

type SkeletonRootProps = SkeletonContextType

const SkeletonContext = createContext<SkeletonContextType>({
  loaded: undefined,
  updating: undefined,
})

const Placeholder: FC<PropsWithClassName<SkeletonPlaceholderProps>> = (props) => {
  const {
    as: Wrapper = 'span',
    size,
    height = size ?? '1em',
    width = size ?? '100%',
    className,
  } = props

  return (
    <Wrapper
      className={classNames('tw-animate-pulse tw-inline-flex tw-rounded tw-bg-[rgb(var(--bg-card))]', className)}
      style={{ width, height }}
    />
  )
}

const Element: FC<PropsWithChildren<PropsWithClassName<SkeletonElementProps>>> = (props) => {
  const {
    placeholder,
    updatePlaceholder = placeholder,
    children,
  } = props

  const {
    loaded = true,
    updating = false,
  } = useContext(SkeletonContext)

  const DefaultPlaceholder = <Placeholder {...props} />

  if (loaded) {
    return (
      <>
        {children}
        {updating
          ? updatePlaceholder
            ? <>{updatePlaceholder}</>
            : DefaultPlaceholder
          : null
        }
      </>
    )
  }

  return placeholder
    ? <>{placeholder}</>
    : DefaultPlaceholder
}

const Root: FC<PropsWithChildren<Required<SkeletonRootProps>>> = (props) => {
  const { children, loaded, updating } = props

  return (
    <SkeletonContext.Provider value={{ loaded, updating }}>
      {children}
    </SkeletonContext.Provider>
  )
}

export const Skeleton = { Root, Element, Placeholder }
