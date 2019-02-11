import * as React from 'react'
// @ts-ignore no .d.ts file
import { MDCDialog } from '@material/dialog'
import { materialize, withControl, EventHandler } from '../Base'

const Container = materialize('mdc-dialog__container')('div')
const Surface = materialize('mdc-dialog__surface')('div')
const Scrim = materialize('mdc-dialog__scrim')('div')

export interface DialogProps extends React.HTMLProps<HTMLDivElement> {
  onOpen?: EventHandler
  onClose?: EventHandler
}

class Dialog extends withControl<DialogProps>(MDCDialog, {
  events: {
    'MDCDialog:opened': 'onOpen',
    'MDCDialog:closed': 'onClose',
  },
}) {
  open() {
    this.MDComponent.open()
  }

  close(action: string) {
    this.MDComponent.close(action)
  }

  render() {
    const { children, onOpen, onClose, ...props } = this.props
    return (
      <div role="alertdialog" ref={this.control} {...props}>
        <Container>
          <Surface>{children}</Surface>
        </Container>
        <Scrim />
      </div>
    )
  }
}

export default materialize<DialogProps>('mdc-dialog', {
  displayName: 'Dialog',
})(Dialog)
