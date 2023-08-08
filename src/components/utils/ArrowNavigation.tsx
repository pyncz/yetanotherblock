import type { FC, PropsWithChildren } from 'react'
import { useCallback, useRef } from 'react'
import type { PropsWithClassName } from '../../models'
import { DEFAULT_INTERVAL } from '../../consts'
import { throttle } from '../../utils'

interface Props {
  /**
   * Throttle interval in ms
   */
  throttleInterval?: number
}

export const ArrowNavigation: FC<PropsWithClassName<PropsWithChildren<Props>>> = (props) => {
  const { children, className, throttleInterval = DEFAULT_INTERVAL } = props
  const container = useRef<HTMLDivElement>(null)

  const getActiveItemIndex = useRef(() => {
    let activeItemIndex: number | undefined
    container.current?.childNodes.forEach((child, index) => {
      if (document.activeElement === child) {
        activeItemIndex = index
      }
    })
    return activeItemIndex
  })

  const getActiveItemIndexWithOffset = useRef((offset = 0) => {
    const activeItemIndex = getActiveItemIndex.current()
    if (activeItemIndex !== undefined && offset && container.current) {
      const len = container.current.childElementCount
      const newIndex = (activeItemIndex + offset) % len

      // enclose the index within the len
      return newIndex < 0 ? len + newIndex : newIndex
    }
    return activeItemIndex
  })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const moveFocusBy = useCallback(throttle((offset = 0) => {
    const newIndex = getActiveItemIndexWithOffset.current(offset)
    if (newIndex !== undefined) {
      (container.current?.childNodes[newIndex] as HTMLElement)?.focus()
    }
  }, { threshhold: throttleInterval }), [throttleInterval])

  return (
    <div
      ref={container}
      className={className}
      onKeyDown={(e) => {
        switch (e.key) {
          case 'ArrowUp':
          case 'ArrowLeft':
            moveFocusBy(-1)
            break
          case 'ArrowDown':
          case 'ArrowRight':
            moveFocusBy(1)
            break
        }
      }}
    >
      {children}
    </div>
  )
}
