import * as React from 'react'
import ListItem from '../List/Item'

const Item = React.forwardRef<typeof ListItem>((props, ref) => (
  <ListItem {...props} tag="a" ref={ref} />
))

Item.displayName = 'DrawerItem'

export default Item
