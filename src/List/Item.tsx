import * as React from 'react'
import { materialize, CssProps, withDefaultTag } from '../Base'

export interface ListItemProps {
  selected?: boolean
  activated?: boolean
}

const cssProps: CssProps<ListItemProps> = ['selected', 'activated']

export default materialize<ListItemProps>('mdc-list-item', {
  cssProps,
  displayName: 'ListItem',
})(withDefaultTag('li'))
