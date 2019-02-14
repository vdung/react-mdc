import React from 'react'
import PropTypes from 'prop-types'
import './TextField.css'
import { TextField, TextFieldHelperText } from '@vdung/react-mdc'

class TextFieldDemo extends React.Component {
  static propTypes = {
    textField: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  }
  state = {
    value: '',
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      value,
    })
  }

  render() {
    const TextFieldComponent = this.props.textField
    return (
      <TextFieldComponent
        value={this.state.value}
        onChange={this.handleChange}
      />
    )
  }
}

export const Basic = () => (
  <TextFieldDemo
    textField={({ value, onChange }) => (
      <TextField
        label="Email Address"
        input={<input value={value} onChange={onChange} />}
      />
    )}
  />
)

export const PasswordWithValidation = () => (
  <TextFieldDemo
    textField={({ value, onChange }) => (
      <TextField
        label="Choose password"
        helperText={
          <TextFieldHelperText persistent validation>
            Must be at least 8 characters long
          </TextFieldHelperText>
        }
        input={
          <input
            required
            type="password"
            pattern=".{8,}"
            value={value}
            onChange={onChange}
          />
        }
      />
    )}
  />
)

export const Outlined = () => (
  <TextFieldDemo
    textField={({ value, onChange }) => (
      <TextField
        label="Your Name"
        outlined
        helperText={
          <TextFieldHelperText persistent validation>
            Must be at least 8 characters
          </TextFieldHelperText>
        }
        input={
          <input required pattern=".{8,}" value={value} onChange={onChange} />
        }
      />
    )}
  />
)

export const LeadingIcon = () => (
  <TextFieldDemo
    textField={({ value, onChange }) => (
      <TextField
        label="Date"
        leadingIcon="event"
        outlined
        input={<input value={value} onChange={onChange} />}
      />
    )}
  />
)

export const TrailingIcon = () => (
  <TextFieldDemo
    textField={({ value, onChange }) => (
      <TextField
        label="Date"
        value={value}
        onChange={onChange}
        trailingIcon="delete"
        input={<input value={value} onChange={onChange} />}
      />
    )}
  />
)

export const TextArea = () => (
  <TextFieldDemo
    textField={({ value, onChange }) => (
      <TextField
        label="Address"
        outlined
        textarea={<textarea value={value} onChange={onChange} />}
      />
    )}
  />
)

export const FullWidth = () => (
  <TextFieldDemo
    textField={({ value, onChange }) => (
      <TextField
        fullwidth
        input={
          <input
            type="text"
            placeholder="Address"
            aria-label="Address"
            value={value}
            onChange={onChange}
          />
        }
      />
    )}
  />
)

export const FullWidthTextArea = () => (
  <TextFieldDemo
    textField={({ value, onChange }) => (
      <TextField
        label="Address"
        outlined
        fullwidth
        textarea={<textarea value={value} onChange={onChange} />}
      />
    )}
  />
)
