import * as React from 'react'
import { materialize, CssProps } from '../Base'

export interface SurfaceProps {
  anchor?: boolean
  fixed?: boolean
}

const cssProps: CssProps<SurfaceProps> = ['fixed']

export default materialize<SurfaceProps>('mdc-menu-surface', {
  cssProps,
  displayName: 'MenuSurface',
})('div')
