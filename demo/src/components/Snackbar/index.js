import React from 'react'
import PropTypes from 'prop-types'
import { Button, Snackbar } from '@vdung/react-mdc'

class SnackbarDemo extends React.Component {
  static propTypes = {
    snackbar: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  }

  handleOpen = () => {
    this.snackbar.open()
  }

  render() {
    const SnackbarComponent = this.props.snackbar

    return (
      <React.Fragment>
        <Button raised onClick={this.handleOpen}>Open Snackbar</Button>
        <SnackbarComponent
          snackbarRef={snackbar => (this.snackbar = snackbar)}
        />
      </React.Fragment>
    )
  }
}

export const Basic = () => (
  <SnackbarDemo
    snackbar={({ snackbarRef, onAction }) => (
      <Snackbar
        ref={snackbarRef}
        label="Message deleted"
        action="Undo"
        onClose={onAction}
      />
    )}
  />
)
