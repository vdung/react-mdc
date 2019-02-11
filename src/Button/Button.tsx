import * as React from 'react'
import { materialize, withDefaultTag, CssProps } from '../Base'

export interface ButtonProps {
  dense?: boolean
  raised?: boolean
  outlined?: boolean
  unelevated?: boolean
}

const cssProps: CssProps<ButtonProps> = [
  'dense',
  'raised',
  'outlined',
  'unelevated',
]

export default materialize<ButtonProps>('mdc-button', {
  cssProps,
  displayName: 'Button',
})(withDefaultTag('button'))
