import * as React from 'react'
import ListItem from '../List/Item'

export interface SelectItemProps
  extends React.ComponentPropsWithoutRef<typeof ListItem> {
  value: string | number
}

const Item = React.forwardRef<typeof ListItem, SelectItemProps>(
  ({ value, ...props }, ref) => (
    <ListItem {...props} ref={ref} role="option" data-value={value} />
  )
)
Item.displayName = 'SelectItem'

export default Item
