import * as React from 'react'
import { materialize, CssProps } from '../Base'

export interface FABProps {
  mini?: boolean
  exited?: boolean
}

const cssProps: CssProps<FABProps> = ['mini', 'exited']

export default materialize<FABProps>('mdc-fab', {
  cssProps,
  displayName: 'FAB',
})('button')
