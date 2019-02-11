import * as React from 'react'
import Button from '../Button/Button'
import { materialize } from '../Base'

export interface ButtonProps
  extends React.ComponentPropsWithRef<typeof Button> {
  action?: string
}

const DialogButton = React.forwardRef<any, ButtonProps>(
  ({ action, ...props }, ref) => (
    <Button {...props} data-mdc-dialog-action={action} ref={ref} />
  )
)

export default materialize<ButtonProps>('mdc-dialog__button', {
  displayName: 'DialogButton',
})(DialogButton)
