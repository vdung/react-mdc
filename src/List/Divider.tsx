import * as React from 'react'
import { materialize, CssProps } from '../Base'

export interface ListDividerProps {
  padded?: boolean
  inset?: boolean
}

export const cssProps: CssProps<ListDividerProps> = ['padded', 'inset']

const Divider: React.FunctionComponent<ListDividerProps> = props => (
  <li role="separator" {...props} />
)

export default materialize<ListDividerProps>('mdc-list-divider', {
  cssProps,
  displayName: 'ListDivider',
})(Divider)
