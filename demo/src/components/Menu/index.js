import React from 'react'
import PropTypes from 'prop-types'
import {
  Menu,
  MenuSurfaceAnchor,
  MenuItem,
  MenuSurface,
  Button,
  ListDivider,
  List,
  ListItem,
} from '@vdung/react-mdc'

class MenuDemo extends React.Component {
  static propTypes = {
    menu: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  }

  state = {
    open: false,
  }

  handleOpen = () => {
    this.setState({
      open: !this.state.open,
    })
  }

  handleClose = evt => {
    this.setState({
      open: false,
    })
  }

  render() {
    const MenuComponent = this.props.menu

    return (
      <MenuComponent
        open={this.state.open}
        onClick={this.handleOpen}
        onClose={this.handleClose}
      />
    )
  }
}

export const Basic = () => (
  <MenuDemo
    menu={({ open, onClose, onClick }) => (
      <MenuSurfaceAnchor>
        <Button onClick={onClick}>Menu</Button>
        <Menu open={open} onSelect={onClose}>
          <MenuItem>Back</MenuItem>
          <MenuItem>Forward</MenuItem>
          <MenuItem>Reload</MenuItem>
          <ListDivider />
          <MenuItem>Help & Feedback</MenuItem>
          <MenuItem>Settings</MenuItem>
        </Menu>
      </MenuSurfaceAnchor>
    )}
  />
)

export const Surface = () => (
  <MenuDemo
    menu={({ open, onClose, onClick }) => (
      <MenuSurfaceAnchor>
        <Button onClick={onClick}>Menu</Button>
        <MenuSurface open={open} onClose={onClose}>
          <List>
            <ListItem>Back</ListItem>
            <ListItem>Forward</ListItem>
            <ListItem>Reload</ListItem>
            <ListDivider />
            <ListItem>Help & Feedback</ListItem>
            <ListItem>Settings</ListItem>
          </List>
        </MenuSurface>
      </MenuSurfaceAnchor>
    )}
  />
)
