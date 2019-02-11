import * as React from 'react'
import { materialize, ClassNameForwardingComponent, CssProps } from '../Base'

export interface ElevationProps {
  z: number
}

const cssProps: CssProps<ElevationProps> = {
  z({ z }) {
    return `z${z}`
  },
}

export default materialize<ElevationProps>('mdc-elevation', {
  cssProps,
  displayName: 'Elevation',
})(ClassNameForwardingComponent)
