import * as React from 'react'
// @ts-ignore no .d.ts file
import { MDCSelect } from '@material/select'
import LineRipple from '../LineRipple/LineRipple'
import NotchedOutline from '../NotchedOutline/NotchedOutline'
import { materialize, withControl, EventHandler } from '../Base'

const FloatingLabel = materialize('mdc-floating-label')('label')
const DropdownIcon = materialize('mdc-select__dropdown-icon')('i')

const cssProps = {
  disabled: 'disabled',
  outlined: 'outlined',
  withLeadingIcon: 'with-leading-icon',
}

export interface SelectProps {
  disabled?: boolean
  outlined?: boolean
  withLeadingIcon?: boolean
  onChange?: EventHandler
  value?: string
  selectedIndex?: number
  valid?: boolean
  required?: boolean
  label?: string | React.ReactElement<any>
  children?: React.ReactNode
}

class Select extends withControl<SelectProps>(MDCSelect, {
  events: {
    onChange: 'MDCSelect:change',
  },
  controlProps: ['disabled', 'selectedIndex', 'value', 'valid', 'required'],
}) {
  renderLabel() {
    const { label } = this.props

    if (typeof label === 'string') {
      return <FloatingLabel>{label}</FloatingLabel>
    }

    return label
  }

  renderFooter() {
    if (this.props.outlined) {
      return <NotchedOutline label={this.renderLabel()} />
    } else {
      return (
        <React.Fragment>
          {this.renderLabel()}
          <LineRipple />
        </React.Fragment>
      )
    }
  }

  render() {
    const { children, outlined, onChange, ...props } = this.cleanProps()
    return (
      <div {...props} ref={this.control}>
        <DropdownIcon />
        {children}
        {this.renderFooter()}
      </div>
    )
  }
}

export default materialize('mdc-select', {
  cssProps,
  keepCssProps: ['disabled', 'outlined'],
})(Select)
