import * as RadixRadioGroup from '@radix-ui/react-radio-group'
import type { ReactNode } from 'react'
import { forwardRef } from 'react'
import classNames from 'classnames'
import type { PropsWithClassName } from '../../../models'

interface Props<
  TOption = unknown,
  TValue extends string = string,
> {
  value: TValue
  option: TOption
  render?: (option: TOption, options: {
    checked: boolean
  }) => ReactNode
  disabled?: boolean
  checked?: boolean
}

export const RadioGroupItem = forwardRef<HTMLButtonElement, PropsWithClassName<Props>>((props, ref) => {
  const {
    option,
    render,
    className,
    ...attributes
  } = props
  const { value, checked = false } = attributes

  return (
    <RadixRadioGroup.Item
      ref={ref}
      {...attributes}
      className={classNames(
        '[--size:2rem] tw-button-secondary',
        'tw-h-[--size] tw-min-w-[--size] tw-p-1 tw-text-center tw-button',
        'data-disabled:tw-opacity-muted data-disabled:tw-cursor-not-allowed',
        checked
          ? 'tw-text-[rgba(var(--radio-option-checked-text),_var(--tw-text-opacity))] tw-bg-opacity-[var(--o-radio-option-checked-bg)] tw-bg-[rgba(var(--radio-option-checked-bg),_var(--tw-bg-opacity))]'
          : 'tw-text-[rgba(var(--radio-option-text),_var(--tw-text-opacity))] hover:tw-text-[rgba(var(--radio-option-text--hover),_var(--tw-text-opacity))] tw-bg-opacity-[var(--o-radio-option-bg)] tw-bg-[rgba(var(--radio-option-bg),_var(--tw-bg-opacity))]',
        className,
      )}
    >
      <span className="tw-relative tw-pointer-events-none">
        {render?.(option, { checked }) ?? value}
      </span>
    </RadixRadioGroup.Item>
  )
})

RadioGroupItem.displayName = 'RadioGroupItem'
