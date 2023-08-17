import type { ReactNode } from 'react'
import { forwardRef, useMemo } from 'react'
import * as RadixSelect from '@radix-ui/react-select'
import { Icon } from '@iconify-icon/react'
import chevronDownIcon from '@iconify/icons-iconoir/nav-arrow-down'
import chevronUpIcon from '@iconify/icons-iconoir/nav-arrow-up'
import classNames from 'classnames'
import { useUncontrolledValue } from '../../../hooks'
import type { PropsWithClassName } from '../../../models'
import { SelectItem } from './Item'

interface Props<
  TOption = unknown,
  TValue extends string = string,
> {
  value?: TValue
  options: TOption[]
  defaultValue?: TValue
  getValue?: (option: TOption) => TValue
  id?: string
  ariaLabel?: string
  placeholder?: string
  disabled?: boolean
  onChange?: (value: TValue) => void
  getTextValue?: (option: TOption) => string
  renderOption?: (option: TOption, options: {
    selected: boolean
  }) => ReactNode
}

export const Select = forwardRef<HTMLButtonElement, PropsWithClassName<Props>>((props, ref) => {
  const {
    id,
    options,
    getValue = (o) => o as string,
    ariaLabel,
    placeholder,
    onChange,
    getTextValue,
    renderOption,
    disabled,
    className,
    value,
    ...attributes
  } = props
  const { defaultValue } = attributes

  const [localValue, setLocalValue] = useUncontrolledValue(value, defaultValue)

  const hasNoChoice = !!defaultValue && options.length < 2

  const selectedOption = useMemo(() => {
    return options.find((option) => getValue(option) === localValue)
  }, [options, localValue, getValue])

  return (
    <RadixSelect.Root
      {...attributes}
      disabled={disabled || hasNoChoice}
      value={localValue}
      onValueChange={(newValue) => {
        setLocalValue(newValue)
        onChange?.(newValue)
      }}
    >
      <RadixSelect.Trigger
        id={id}
        ref={ref}
        title={selectedOption ? getTextValue?.(selectedOption) : undefined}
        className={classNames(
          'tw-group/trigger tw-p-2 tw--m-2 tw-h-ui tw-flex-center-y tw-inline-flex tw-duration-normal hover:tw-duration-fast tw-rounded tw-pr-[1.75em] tw-relative child:tw-max-w-full child:tw-inline-flex hover:tw-bg-x2',
          className,
        )}
        aria-label={ariaLabel}
      >
        <RadixSelect.Value placeholder={placeholder} className="tw-inline-flex tw-flex-1" />
        <RadixSelect.Icon className="tw-duration-fast group-disabled/trigger:tw-opacity-muted tw-text-[rgba(var(--select-icon),_var(--tw-text-opacity))] tw-inline-flex tw-absolute tw-right-2">
          <Icon icon={chevronDownIcon} />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content className="tw-backdrop-blur-sm tw-bg-opacity-20 tw-py-0.5 tw-shadow-popup tw-overflow-hidden tw-bg-[rgba(var(--select-content-bg),_var(--tw-bg-opacity))] tw-rounded-lg tw-text-x2 tw-duration-fast">
          <RadixSelect.ScrollUpButton className="tw-w-full tw-text-center tw-duration-fast tw-text-[rgba(var(--select-arrow),_var(--tw-text-opacity))] hover:tw-text-[rgba(var(--select-arrow--hover),_var(--tw-text-opacity))]">
            <Icon icon={chevronUpIcon} />
          </RadixSelect.ScrollUpButton>

          <RadixSelect.Viewport className="tw-p-1.5">
            {...options.map((option) => {
              const optionValue = getValue(option)
              return (
                <SelectItem
                  key={optionValue}
                  option={option}
                  value={optionValue}
                  textValue={getTextValue?.(option)}
                  selected={localValue === optionValue}
                  render={renderOption}
                />
              )
            })}
          </RadixSelect.Viewport>

          <RadixSelect.ScrollDownButton className="tw-w-full tw-text-center tw-duration-fast tw-text-[rgba(var(--select-arrow),_var(--tw-text-opacity))] hover:tw-text-[rgba(var(--select-arrow--hover),_var(--tw-text-opacity))]">
            <Icon icon={chevronDownIcon} />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
})

Select.displayName = 'Select'
