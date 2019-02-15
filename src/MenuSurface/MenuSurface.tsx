import * as React from 'react'
// @ts-ignore no .d.ts file
import { MDCMenuSurface } from '@material/menu-surface'
import Surface, { SurfaceProps } from './Surface'
import { withControl, EventHandler } from '../Base'

export interface MenuSurfaceProps extends SurfaceProps {
  open?: boolean
  fixedPosition?: boolean
  quickOpen?: boolean
  absolutePosition?: [number, number]
  anchorCorner?: number
  anchorMargin?: number
  menuSurfaceAnchorElement?: Element
  isHoisted?: boolean
  onOpen?: EventHandler
  onClose?: EventHandler
}

class MenuSurface extends withControl<MenuSurfaceProps>(MDCMenuSurface, {
  events: {
    onOpen: 'MDCMenuSurface:opened',
    onClose: 'MDCMenuSurface:closed',
  },
  controlProps: [
    'open',
    'quickOpen',
    'isHoisted',
    'anchorCorner',
    'anchorMargin',
    'absolutePosition',
    'menuSurfaceAnchorElement',
    'fixedPosition',
  ],
}) {
  componentDidUpdate(prevProps: MenuSurfaceProps) {
    if (this.props.isHoisted && !prevProps.isHoisted) {
      this.MDComponent.hoistMenuToBody()
    }
    super.componentDidUpdate(prevProps)
  }

  render() {
    const props = this.cleanProps()
    return <Surface {...props} ref={this.control} />
  }
}

export default MenuSurface
