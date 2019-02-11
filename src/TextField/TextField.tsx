import * as React from 'react'
// @ts-ignore no .d.ts file
import { MDCTextField } from '@material/textfield'
import Icon from './Icon'
import LineRipple from '../LineRipple/LineRipple'
import NotchedOutline from '../NotchedOutline/NotchedOutline'
import {
  materialize,
  withControl,
  CssProps,
  ClassNameForwardingComponent,
} from '../Base'

const FloatingLabel = materialize('mdc-floating-label')('label')

type TextFieldInputComponent =
  | React.ReactHTMLElement<HTMLInputElement>
  | React.ReactHTMLElement<HTMLTextAreaElement>

export interface TextFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  textarea?: boolean
  fullwidth?: boolean
  outlined?: boolean
  disabled?: boolean
  dense?: boolean
  label?: string
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  helperText?: React.ReactNode
  children: TextFieldInputComponent
}

const cssProps: CssProps<TextFieldProps> = {
  fullwidth: 'fullwidth',
  disabled: 'disabled',
  dense: 'dense',
  outlined: 'outlined',
  textarea({ children, textarea }) {
    return textarea || children.type === 'textarea'
  },
  leadingIcon({ leadingIcon }) {
    if (leadingIcon) {
      return `with-leading-icon`
    }
  },
  trailingIcon({ trailingIcon }) {
    if (trailingIcon) {
      return `with-trailing-icon`
    }
  },
}

const Input = materialize('mdc-text-field__input')(ClassNameForwardingComponent)

class TextField extends withControl<TextFieldProps>(MDCTextField) {
  renderIcon(icon: React.ReactNode) {
    return (
      <Icon role="button" tabIndex={0}>
        {icon}
      </Icon>
    )
  }

  renderInput(children: TextFieldInputComponent) {
    return <Input>{children}</Input>
  }

  renderLabel(label: React.ReactNode) {
    return <FloatingLabel>{label}</FloatingLabel>
  }

  renderOutline(label: React.ReactNode) {
    return <NotchedOutline label={this.renderLabel(label)} />
  }

  render() {
    const {
      leadingIcon,
      trailingIcon,
      label,
      children,
      outlined,
      helperText,
      fullwidth,
      ...props
    } = this.props

    const textField = (
      <div {...props} ref={this.control}>
        {leadingIcon ? this.renderIcon(leadingIcon) : null}
        {this.renderInput(children)}
        {label && !outlined ? this.renderLabel(label) : null}
        {trailingIcon ? this.renderIcon(trailingIcon) : null}
        {outlined ? (
          this.renderOutline(label)
        ) : fullwidth ? null : (
          <LineRipple />
        )}
      </div>
    )

    if (helperText) {
      return (
        <React.Fragment>
          {textField}
          {helperText}
        </React.Fragment>
      )
    }

    return textField
  }
}

export default materialize<TextFieldProps>('mdc-text-field', {
  cssProps,
  keepCssProps: [
    'fullwidth',
    'outlined',
    'leadingIcon',
    'trailingIcon',
    'children',
  ],
})(TextField)
