import * as React from 'react'
// @ts-ignore no .d.ts file
import { MDCSnackbar } from '@material/snackbar'
import Button from '../Button/Button'
import { materialize, withControl, EventHandler, CssProps } from '../Base'

const Surface = materialize('mdc-snackbar__surface')('div')
const Label = materialize('mdc-snackbar__label')('div')
const Actions = materialize('mdc-snackbar__actions')('div')
const Action = materialize('mdc-snackbar__action')(Button)

export interface SnackbarProps {
  leading?: boolean
  stacked?: boolean
  open?: boolean
  label?: string
  action?: string
  closeOnEscape?: boolean
  timeoutMs?: number
  onOpen?: EventHandler
  onClose?: EventHandler
}

const cssProps: CssProps<SnackbarProps> = ['leading', 'stacked', 'open']

class Snackbar extends withControl<SnackbarProps>(MDCSnackbar, {
  events: {
    'MDCSnackbar:open': 'onOpen',
    'MDCSnackbar:closed': 'onClose',
  },
  controlProps: ['closeOnEscape', 'timeoutMs'],
}) {
  open() {
    this.MDComponent.open()
  }

  close(reason?: string) {
    this.MDComponent.close(reason)
  }

  render() {
    const { label, action, ...props } = this.cleanProps()
    return (
      <div {...props} ref={this.control}>
        <Surface>
          <Label>{label}</Label>
          <Actions>
            <Action>{action}</Action>
          </Actions>
        </Surface>
      </div>
    )
  }
}

export default materialize<SnackbarProps>('mdc-snackbar', {
  cssProps,
})(Snackbar)
