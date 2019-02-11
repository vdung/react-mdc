import * as React from 'react'
import ListItem from '../List/Item'

const Item: React.FunctionComponent<
  React.ComponentPropsWithoutRef<typeof ListItem>
> = props => <ListItem {...props} role="menuitem" />
Item.displayName = 'MenuItem'

export default Item
