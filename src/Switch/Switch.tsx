import * as React from 'react'
// @ts-ignore no .d.ts file
import { MDCSwitch } from '@material/switch'
import {
  materialize,
  withControl,
  CssProps,
  ClassNameForwardingComponent,
} from '../Base'

const Input = materialize<React.HTMLProps<HTMLInputElement>>(
  'mdc-switch__native-control'
)(ClassNameForwardingComponent)
const Track = materialize('mdc-switch__track')('div')
const Thumb = materialize('mdc-switch__thumb')('div')
const ThumbUnderLay = materialize('mdc-switch__thumb-underlay')('div')

export interface SwitchProps {
  disabled?: boolean
  checked?: boolean
  children: React.ReactHTMLElement<HTMLInputElement>
}

const cssProps: CssProps<SwitchProps> = ['disabled', 'checked']

class Switch extends withControl<SwitchProps>(MDCSwitch, {
  controlProps: ['disabled', 'checked'],
}) {
  render() {
    const { disabled, checked, children, ...props } = this.props
    return (
      <div {...props} ref={this.control}>
        <Track />
        <ThumbUnderLay>
          <Thumb>
            <Input type="checkbox" role="switch">
              {children}
            </Input>
          </Thumb>
        </ThumbUnderLay>
      </div>
    )
  }
}

export default materialize<SwitchProps>('mdc-switch', {
  cssProps,
  keepCssProps: ['disabled', 'checked'],
})(Switch)
