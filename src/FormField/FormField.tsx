import * as React from 'react'
import { materialize } from '../Base'

const cssProps = {
  alignEnd: 'align-end',
}

export default materialize('mdc-form-field', {
  cssProps,
  displayName: 'FormField',
})('div')
