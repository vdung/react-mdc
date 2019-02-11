import * as React from 'react'
import Surface from '../MenuSurface/Surface'
import List from '../List/List'
import { materialize } from '../Base'

const Menu = materialize('mdc-menu')(Surface)
const SelectMenu: React.FunctionComponent = ({ children, ...props }) => (
  <Menu {...props}>
    <List>{children}</List>
  </Menu>
)

export default materialize('mdc-select__menu', {
  displayName: 'SelectMenu',
})(SelectMenu)
