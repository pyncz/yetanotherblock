import type { ButtonHTMLAttributes, ReactNode } from 'react'
import type { SizeExtra } from '../../ui/size'

type Appearance = 'primary' | 'secondary'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  size?: SizeExtra
  appearance?: Appearance
  icon?: ReactNode
  iconLeft?: ReactNode
  iconRight?: ReactNode
  disabled?: boolean
}
