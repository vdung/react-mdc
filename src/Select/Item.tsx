import * as React from 'react'
import ListItem from '../List/Item'

const Item: React.FunctionComponent = props => (
  <ListItem {...props} role="option" />
)
Item.displayName = 'SelectItem'

export default Item
