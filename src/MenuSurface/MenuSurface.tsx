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
    'MDCMenuSurface:opened': 'onOpen',
    'MDCMenuSurface:closed': 'onClose',
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
  componentWillReceiveProps(nextProps: MenuSurfaceProps) {
    if (nextProps.isHoisted && !this.props.isHoisted) {
      this.MDComponent.hoistMenuToBody()
    }
    super.componentWillReceiveProps(nextProps)
  }

  render() {
    const props = this.cleanProps()
    return <Surface {...props} ref={this.control} />
  }
}

export default MenuSurface
