import React from 'react'
import PropTypes from 'prop-types'
import { FormField, Checkbox } from '@vdung/react-mdc'

class CheckboxDemo extends React.Component {
  static propTypes = {
    checkbox: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  }

  state = {}

  handleToggle = () => {
    this.setState({
      checked: !this.state.checked,
    })
  }

  render() {
    const CheckboxComponent = this.props.checkbox
    return (
      <CheckboxComponent
        checked={this.state.checked}
        onChange={this.handleToggle}
      />
    )
  }
}

export const Basic = () => (
  <CheckboxDemo
    checkbox={({ checked, onChange }) => (
      <FormField>
        <Checkbox
          checked={checked}
          indeterminate={typeof checked !== 'boolean'}
          input={<input id="basic-checkbox" onChange={onChange} />}
        />
        <label htmlFor="basic-checkbox">Checkbox</label>
      </FormField>
    )}
  />
)

export const Disabled = () => (
  <CheckboxDemo
    checkbox={() => (
      <FormField>
        <Checkbox disabled input={<input id="basic-checkbox" />} />
        <label htmlFor="basic-checkbox">Checkbox</label>
      </FormField>
    )}
  />
)
