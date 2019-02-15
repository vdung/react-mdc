import * as React from 'react'
import Surface from '../MenuSurface/Surface'
import List from '../List/List'
import { materialize } from '../Base'

const Menu = materialize('mdc-menu')(Surface)
const SelectMenu = React.forwardRef<typeof Surface>(
  ({ children, ...props }, ref) => (
    <Menu {...props} ref={ref}>
      <List>{children}</List>
    </Menu>
  )
)

export default materialize('mdc-select__menu', {
  displayName: 'SelectMenu',
})(SelectMenu)
