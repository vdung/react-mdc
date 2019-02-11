import * as React from 'react'
// @ts-ignore no .d.ts file
import { MDCRipple } from '@material/ripple'
import {
  materialize,
  withControl,
  ClassNameForwardingComponent,
  CssProps,
} from '../Base'

export interface RippleProps {
  unbounded?: boolean
  children: React.ReactElement<any>
  primary?: boolean
  accent?: boolean
}

const cssProps: CssProps<RippleProps> = ['primary', 'accent']

class Ripple extends withControl<RippleProps>(MDCRipple, {
  controlProps: ['unbounded'],
}) {
  static defaultProps = {
    unbounded: false,
  }

  render() {
    const { unbounded, ...props } = this.props
    return <ClassNameForwardingComponent {...props} ref={this.control} />
  }
}

export default materialize<RippleProps>('mdc-ripple-surface', {
  cssProps,
  displayName: 'Ripple',
})(Ripple)
