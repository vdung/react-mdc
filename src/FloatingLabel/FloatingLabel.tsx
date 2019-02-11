import * as React from 'react'
// @ts-ignore no .d.ts file
import { MDCFloatingLabel } from '@material/floating-label'
import { materialize, withControl } from '../Base'

const cssProps = {
  floatAbove: 'float-above',
  shake: 'shake',
}

class FloatingLabel extends withControl(MDCFloatingLabel) {
  render() {
    const { children, ...props } = this.props
    return <div {...props} ref={this.control} />
  }
}

export default materialize('mdc-floating-label', { cssProps })(FloatingLabel)
