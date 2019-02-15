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
  DrawerList,
  DrawerItem,
  DrawerTitle,
  DrawerSubtitle,
  MaterialIcon,
  ListItemText,
  ListItemGraphic,
  ListGroupHeader,
  ListGroupDivider,
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

const MyDrawer = () => (
  <React.Fragment>
    <DrawerHeader>
      <DrawerTitle>Demo</DrawerTitle>
      <DrawerSubtitle>@vdung/react-mdc</DrawerSubtitle>
    </DrawerHeader>
    <DrawerContent>
      <DrawerList>
        <DrawerItem activated>
          <ListItemGraphic>
            <MaterialIcon icon="inbox" />
          </ListItemGraphic>
          <ListItemText>Inbox</ListItemText>
        </DrawerItem>
        <DrawerItem>
          <ListItemGraphic>
            <MaterialIcon icon="star" />
          </ListItemGraphic>
          <ListItemText>Start</ListItemText>
        </DrawerItem>
        <DrawerItem>
          <ListItemGraphic>
            <MaterialIcon icon="send" />
          </ListItemGraphic>
          <ListItemText>Send Mail</ListItemText>
        </DrawerItem>
        <DrawerItem>
          <ListItemGraphic>
            <MaterialIcon icon="drafts" />
          </ListItemGraphic>
          <ListItemText>Drafts</ListItemText>
        </DrawerItem>
        <ListGroupDivider />
        <ListGroupHeader>Labels</ListGroupHeader>
        <DrawerItem>
          <ListItemGraphic>
            <MaterialIcon icon="bookmark" />
          </ListItemGraphic>
          <ListItemText>Family</ListItemText>
        </DrawerItem>
        <DrawerItem>
          <ListItemGraphic>
            <MaterialIcon icon="bookmark" />
          </ListItemGraphic>
          <ListItemText>Friends</ListItemText>
        </DrawerItem>
        <DrawerItem>
          <ListItemGraphic>
            <MaterialIcon icon="bookmark" />
          </ListItemGraphic>
          <ListItemText>Work</ListItemText>
        </DrawerItem>
      </DrawerList>
    </DrawerContent>
  </React.Fragment>
)

export const Modal = () => (
  <DrawerDemo
    drawer={({ open, onClose, onToggle }) => (
      <div className="drawer__layout">
        <TopAppBar fixed onNav={onToggle}>
          <TopAppBarNavigation
            icon={<MaterialIcon icon="menu" />}
            title="React-Mdc Demo"
          />
        </TopAppBar>
        <Drawer open={open} onClose={onClose} modal>
          <MyDrawer />
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
          <MyDrawer />
        </Drawer>
        <DrawerAppContent className="drawer__content">
          <TopAppBar onNav={onToggle}>
            <TopAppBarNavigation
              icon={<MaterialIcon icon="menu" />}
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
          <MyDrawer />
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
