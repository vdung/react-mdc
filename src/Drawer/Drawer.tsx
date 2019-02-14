import * as React from 'react'
// @ts-ignore no .d.ts file
import { MDCDrawer } from '@material/drawer'
import { materialize, withControl, EventHandler, CssProps } from '../Base'

const Scrim = materialize('mdc-drawer-scrim')('div')

export interface DrawerProps extends React.HTMLProps<HTMLElement> {
  modal?: boolean
  dismissible?: boolean
  open?: boolean
  onOpen?: EventHandler
  onClose?: EventHandler
}

const cssProps: CssProps<DrawerProps> = ['modal', 'dismissible']

class Drawer extends withControl<DrawerProps>(MDCDrawer, {
  events: {
    'MDCDrawer:opened': 'onOpen',
    'MDCDrawer:closed': 'onClose',
  },
  controlProps: ['open'],
}) {
  render() {
    const { onOpen, onClose, open, modal, dismissible, ...props } = this.props
    if (modal) {
      return (
        <React.Fragment>
          <aside {...props} ref={this.control} />
          <Scrim />
        </React.Fragment>
      )
    }

    if (dismissible) {
      return <aside {...props} ref={this.control} />
    }

    return <aside {...props} />
  }
}

export default materialize<DrawerProps>('mdc-drawer', {
  cssProps,
  keepCssProps: ['modal', 'dismissible'],
  displayName: 'Drawer',
})(Drawer)
