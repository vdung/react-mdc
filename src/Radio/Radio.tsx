import * as React from 'react'
// @ts-ignore no .d.ts file
import { MDCRadio } from '@material/radio'
import {
  materialize,
  withControl,
  CssProps,
  ClassNameForwardingComponent,
} from '../Base'

const cssProps: CssProps<RadioProps> = ['disabled']

interface RadioProps {
  disabled?: boolean
  checked?: boolean
  value?: string
  children: React.ReactHTMLElement<HTMLInputElement>
}

const Input = materialize<React.HTMLProps<HTMLInputElement>>(
  'mdc-radio__native-control'
)(ClassNameForwardingComponent)
const Background = materialize('mdc-radio__background')('div')
const OuterCircle = materialize('mdc-radio__outer-circle')('div')
const InnerCircle = materialize('mdc-radio__inner-circle')('div')

class Radio extends withControl<RadioProps>(MDCRadio, {
  controlProps: ['disabled', 'checked', 'value'],
}) {
  render() {
    const { disabled, checked, value, children, ...props } = this.props
    return (
      <div {...props} ref={this.control}>
        <Input type="radio" disabled={disabled}>
          {children}
        </Input>
        <Background>
          <OuterCircle />
          <InnerCircle />
        </Background>
      </div>
    )
  }
}

export default materialize<RadioProps>('mdc-radio', {
  cssProps,
  keepCssProps: ['disabled'],
})(Radio)
