import * as React from 'react'
// @ts-ignore no .d.ts file
import { MDCMenu } from '@material/menu'
import Surface, { SurfaceProps } from '../MenuSurface/Surface'
import List from '../List/List'
import { materialize, withControl, EventHandler } from '../Base'

export interface MenuProps extends SurfaceProps {
  open?: boolean
  quickOpen?: boolean
  wrapFocus?: boolean
  absolutePosition?: [number, number]
  fixedPosition?: boolean
  anchorCorner?: number
  anchorMargin?: number
  anchorElement?: Element
  isHoisted?: boolean
  onSelect?: EventHandler
  children?: React.ReactNode
}

class Menu extends withControl<MenuProps>(MDCMenu, {
  events: {
    'MDCMenu:selected': 'onSelect',
  },
  controlProps: [
    'open',
    'quickOpen',
    'isHoisted',
    'anchorCorner',
    'anchorMargin',
    'absolutePosition',
    'anchorElement',
    'fixedPosition',
  ],
}) {
  render() {
    const { children, onSelect, ...props } = this.cleanProps()
    return (
      <Surface {...props} tabIndex={-1} ref={this.control}>
        <List role="menu" aria-hidden="true" aria-orientation="vertical">
          {children}
        </List>
      </Surface>
    )
  }
}

export default materialize<MenuProps>('mdc-menu')(Menu)
