import * as React from 'react'
// @ts-ignore no .d.ts file
import { MDCTextField } from '@material/textfield'
import MaterialIcon from '../MaterialIcon/MaterialIcon'
import LineRipple from '../LineRipple/LineRipple'
import NotchedOutline from '../NotchedOutline/NotchedOutline'
import {
  materialize,
  withControl,
  CssProps,
  ClassNameForwardingComponent,
} from '../Base'

const FloatingLabel = materialize('mdc-floating-label')('label')
const Icon = materialize<React.HTMLProps<any>>('mdc-text-field__icon')(
  ClassNameForwardingComponent
)
type IconType = string | React.ReactElement<any>
const Input = materialize('mdc-text-field__input')(ClassNameForwardingComponent)

export interface TextFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  textarea?: boolean | React.ReactHTMLElement<HTMLTextAreaElement>
  fullwidth?: boolean
  outlined?: boolean
  disabled?: boolean
  dense?: boolean
  label?: string
  leadingIcon?: IconType
  trailingIcon?: IconType
  helperText?: React.ReactNode
  input?: React.ReactHTMLElement<HTMLInputElement>
}

const cssProps: CssProps<TextFieldProps> = {
  fullwidth: 'fullwidth',
  disabled: 'disabled',
  dense: 'dense',
  outlined: 'outlined',
  textarea({ textarea }) {
    if (typeof textarea === 'boolean') {
      return textarea
    }
    return typeof textarea !== 'undefined'
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

class TextField extends withControl<TextFieldProps>(MDCTextField) {
  renderIcon(icon: IconType) {
    if (typeof icon === 'string') {
      return (
        <Icon role="button" tabIndex={0}>
          <MaterialIcon>{icon}</MaterialIcon>
        </Icon>
      )
    }

    return (
      <Icon role="button" tabIndex={0}>
        {icon}
      </Icon>
    )
  }

  renderInput() {
    const { input, textarea } = this.props
    if (typeof textarea === 'boolean') {
      return (
        <Input>
          <textarea />
        </Input>
      )
    }

    if (textarea) {
      return <Input>{textarea}</Input>
    }

    if (input) {
      return <Input>{input}</Input>
    }

    return (
      <Input>
        <input />
      </Input>
    )
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
      input,
      textarea,
      outlined,
      helperText,
      fullwidth,
      ...props
    } = this.props

    const textField = (
      <div {...props} ref={this.control}>
        {leadingIcon ? this.renderIcon(leadingIcon) : null}
        {this.renderInput()}
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
    'textarea',
    'fullwidth',
    'outlined',
    'leadingIcon',
    'trailingIcon',
  ],
})(TextField)
