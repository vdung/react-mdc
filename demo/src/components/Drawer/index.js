import React from 'react'
import PropTypes from 'prop-types'
import './Drawer.css'
import {
  TopAppBar,
  TopAppBarNavigation,
  Drawer,
  DrawerHeader,
  DrawerContent,
  DrawerAppContent,
  DrawerItem,
  MaterialIcon,
  Ripple,
  List,
} from '@vdung/react-mdc'

class DrawerDemo extends React.Component {
  static propTypes = {
    drawer: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  }

  state = {
    open: true,
  }

  handleClose = () => {
    this.setState({
      open: false,
    })
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    const DrawerComponent = this.props.drawer

    return (
      <React.Fragment>
        <style>{'body { margin: 0px }'}</style>
        <DrawerComponent
          open={this.state.open}
          onClose={this.handleClose}
          onToggle={this.handleToggle}
        />
      </React.Fragment>
    )
  }
}

export const Modal = () => (
  <DrawerDemo
    drawer={({ open, onClose, onToggle }) => (
      <div className="drawer__layout">
        <TopAppBar fixed onNav={onToggle}>
          <TopAppBarNavigation
            icon={<MaterialIcon>menu</MaterialIcon>}
            title="React-Mdc Demo"
          />
        </TopAppBar>
        <Drawer open={open} onClose={onClose} modal>
          <DrawerHeader />
          <DrawerContent>
            <List>
              <DrawerItem activated>Home</DrawerItem>
            </List>
          </DrawerContent>
        </Drawer>
      </div>
    )}
  />
)

export const Dimissible = () => (
  <DrawerDemo
    drawer={({ open, onClose, onToggle }) => (
      <div className="drawer__layout">
        <Drawer open={open} onClose={onClose} dismissible>
          <DrawerHeader />
          <DrawerContent>
            <List>
              <DrawerItem activated>Home</DrawerItem>
            </List>
          </DrawerContent>
        </Drawer>
        <DrawerAppContent className="drawer__content">
          <TopAppBar onNav={onToggle}>
            <TopAppBarNavigation
              icon={<MaterialIcon>menu</MaterialIcon>}
              title="React-Mdc Demo"
            />
          </TopAppBar>
        </DrawerAppContent>
      </div>
    )}
  />
)

export const Permanent = () => (
  <DrawerDemo
    drawer={() => (
      <div className="drawer__layout">
        <Drawer>
          <DrawerHeader />
          <DrawerContent>
            <List>
              <DrawerItem activated>Home</DrawerItem>
            </List>
          </DrawerContent>
        </Drawer>
        <DrawerAppContent className="drawer__content">
          <TopAppBar>
            <TopAppBarNavigation title="React-Mdc Demo" />
          </TopAppBar>
        </DrawerAppContent>
      </div>
    )}
  />
)
