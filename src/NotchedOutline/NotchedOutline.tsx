import * as React from 'react'
// @ts-ignore no .d.ts file
import { MDCNotchedOutline } from '@material/notched-outline'
import Leading from './Leading'
import Notch from './Notch'
import Trailing from './Trailing'
import { materialize, withControl, CssProps } from '../Base'

const FloatingLabel = materialize('mdc-floating-label')('label')

export interface NotchedOutlineProps {
  notched?: boolean
  label?: React.ReactNode
}

const cssProps: CssProps<NotchedOutlineProps> = ['notched']

class NotchedOutline extends withControl<NotchedOutlineProps>(
  MDCNotchedOutline
) {
  renderLabel(label: React.ReactNode) {
    if (typeof label === 'string') {
      return <FloatingLabel>{label}</FloatingLabel>
    }

    return label
  }

  render() {
    const { label, children, ...props } = this.props
    if (label) {
      return (
        <div {...props} ref={this.control}>
          <Leading />
          <Notch>{this.renderLabel(label)}</Notch>
          <Trailing />
        </div>
      )
    }

    return (
      <div {...props} ref={this.control}>
        {children}
      </div>
    )
  }
}

export default materialize<NotchedOutlineProps>('mdc-notched-outline', {
  cssProps,
})(NotchedOutline)
