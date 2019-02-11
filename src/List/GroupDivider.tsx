import * as React from 'react'
import { ListDividerProps, cssProps } from './Divider'
import { materialize } from '../Base'

const GroupDivider: React.FunctionComponent<ListDividerProps> = props => (
  <hr role="separator" {...props} />
)

export default materialize<ListDividerProps>('mdc-list-divider', {
  cssProps,
  displayName: 'ListGroupDivider',
})(GroupDivider)
