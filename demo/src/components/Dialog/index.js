import React from 'react'
import PropTypes from 'prop-types'
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogButton,
  DialogContent,
  List,
  ListItem,
  Button,
} from '@vdung/react-mdc'

const DialogPropTypes = {
  open: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  elemRef: PropTypes.func,
}

class DialogDemo extends React.Component {
  static propTypes = {
    dialog: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  }

  dialog = React.createRef()

  state = {
    open: true,
  }

  handleOpen = () => {
    this.setState({
      open: true,
    })
  }

  handleClose = () => {
    this.setState({
      open: false,
    })
  }

  render() {
    const DialogComponent = this.props.dialog

    return (
      <div style={{ padding: 16 }}>
        <Button
          raised
          onClick={() => {
            this.dialog.current.open()
          }}
        >
          Show Dialog
        </Button>
        <DialogComponent
          dialogRef={this.dialog}
          onOpen={this.handleOpen}
          onClose={this.handleClose}
        />
      </div>
    )
  }
}

export const Default = () => (
  <DialogDemo
    dialog={({ dialogRef, onOpen, onClose }) => (
      <Dialog ref={dialogRef} onOpen={onOpen} onClose={onClose}>
        <DialogTitle>Are you happy?</DialogTitle>
        <DialogContent>
          Please check the left and right side of this element for fun.
        </DialogContent>
        <DialogActions>
          <DialogButton action="cancel">Cancel</DialogButton>
          <DialogButton action="accept">Accept</DialogButton>
        </DialogActions>
      </Dialog>
    )}
  />
)

export const Scrolling = () => (
  <DialogDemo
    dialog={({ dialogRef, onOpen, onClose }) => (
      <Dialog ref={dialogRef} onOpen={onOpen} onClose={onClose}>
        <DialogTitle>Are you happy?</DialogTitle>
        <DialogContent>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
            <ListItem>Item 5</ListItem>
            <ListItem>Item 6</ListItem>
            <ListItem>Item 7</ListItem>
            <ListItem>Item 8</ListItem>
            <ListItem>Item 9</ListItem>
            <ListItem>Item 10</ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <DialogButton action="cancel">Cancel</DialogButton>
          <DialogButton action="accept">Accept</DialogButton>
        </DialogActions>
      </Dialog>
    )}
  />
)
