import * as React from 'react'
import { materialize, ClassNameForwardingComponent, CssProps } from '../Base'

export interface ActionProps {
  button?: boolean
  icon?: boolean
  children: React.ReactNode
}

const cssProps: CssProps<ActionProps> = ['button', 'icon']

export default materialize<ActionProps>('mdc-card__action', {
  cssProps,
  displayName: 'CardAction',
})(ClassNameForwardingComponent)
