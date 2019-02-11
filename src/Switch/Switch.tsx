import * as React from 'react'
// @ts-ignore no .d.ts file
import { MDCSwitch } from '@material/switch'
import { materialize, withControl, CssProps } from '../Base'

const Input = materialize('mdc-switch__native-control')('input')
const Track = materialize('mdc-switch__track')('div')
const Thumb = materialize('mdc-switch__thumb')('div')
const ThumbUnderLay = materialize('mdc-switch__thumb-underlay')('div')

export interface SwitchProps {
  disabled?: boolean
  checked?: boolean
  inputProps?: React.ComponentPropsWithoutRef<'input'>
}

const cssProps: CssProps<SwitchProps> = ['disabled', 'checked']

class Switch extends withControl<SwitchProps>(MDCSwitch, {
  controlProps: ['disabled', 'checked'],
}) {
  render() {
    const { disabled, checked, inputProps, ...props } = this.props
    return (
      <div {...props} ref={this.control}>
        <Track />
        <ThumbUnderLay>
          <Thumb>
            <Input
              {...inputProps}
              type="checkbox"
              role="switch"
              checked={checked}
              disabled={disabled}
            />
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
