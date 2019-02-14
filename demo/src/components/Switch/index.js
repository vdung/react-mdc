import React from 'react'
import PropTypes from 'prop-types'
import { FormField, Switch } from '@vdung/react-mdc'

class SwitchDemo extends React.Component {
  static propTypes = {
    switch: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  }

  state = {
    checked: true,
  }

  handleToggle = () => {
    this.setState({
      checked: !this.state.checked,
    })
  }

  render() {
    const SwitchComponent = this.props.switch
    return (
      <SwitchComponent
        checked={this.state.checked}
        onChange={this.handleToggle}
      />
    )
  }
}

export const Basic = () => (
  <SwitchDemo
    switch={({ checked, onChange }) => (
      <FormField>
        <Switch
          checked={checked}
          input={<input id="basic-switch" onChange={onChange} />}
        />
        <label htmlFor="basic-switch">On/Off</label>
      </FormField>
    )}
  />
)

export const Disabled = () => (
  <SwitchDemo
    switch={({ checked, onChange }) => (
      <FormField>
        <Switch disabled input={<input id="disabled-switch" />} />
        <label htmlFor="disabled-switch">Disabled</label>
      </FormField>
    )}
  />
)
