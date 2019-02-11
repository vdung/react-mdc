import * as React from 'react'
import { materialize } from '../Base'

const cssProps = {
  persistent: 'persistent',
  validation: 'validation-msg',
}

export interface HelperTextProps {
  persistent?: boolean
  validation?: boolean
}

export default materialize<HelperTextProps>('mdc-text-field-helper-text', {
  cssProps,
  displayName: 'HelperText',
})('div')
