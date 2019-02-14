import * as React from 'react'
// @ts-ignore no .d.ts file
import { MDCCheckbox } from '@material/checkbox'
import { materialize, withControl, ClassNameForwardingComponent } from '../Base'

const Input = materialize<React.HTMLProps<HTMLInputElement>>(
  'mdc-checkbox__native-control'
)(ClassNameForwardingComponent)
const Background = materialize('mdc-checkbox__background')('div')
const Checkmark = materialize('mdc-checkbox__checkmark')('svg')
const CheckmarkPath = materialize('mdc-checkbox__checkmark-path')('path')
const MixedMark = materialize('mdc-checkbox__mixedmark')('div')

export interface CheckboxProps {
  checked?: boolean
  indeterminate?: boolean
  disabled?: boolean
  value?: string
  input?: React.ReactHTMLElement<HTMLInputElement>
}

class Checkbox extends withControl<CheckboxProps>(MDCCheckbox, {
  controlProps: ['disabled', 'indeterminate', 'checked', 'value'],
}) {
  renderInput(input?: React.ReactHTMLElement<HTMLInputElement>) {
    return input || <input />
  }

  render() {
    const {
      disabled,
      indeterminate,
      checked,
      value,
      input,
      ...props
    } = this.props
    return (
      <div {...props} ref={this.control}>
        <Input type="checkbox" disabled={disabled}>
          {this.renderInput(input)}
        </Input>
        <Background>
          <Checkmark viewBox="0 0 24 24">
            <CheckmarkPath fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
          </Checkmark>
          <MixedMark />
        </Background>
      </div>
    )
  }
}

export default materialize('mdc-checkbox', {
  displayName: 'Checkbox',
})(Checkbox)
