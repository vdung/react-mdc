import React from 'react'
import PropTypes from 'prop-types'
import { Radio, FormField } from '@vdung/react-mdc'

class RadioDemo extends React.Component {
  static propTypes = {
    radios: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  }

  state = {
    selected: 0,
  }

  handleToggle = selected => {
    this.setState({
      selected,
    })
  }

  render() {
    const RadiosComponent = this.props.radios

    return (
      <RadiosComponent
        selected={this.state.selected}
        onToggle={this.handleToggle}
      />
    )
  }
}

export const Default = () => (
  <RadioDemo
    radios={({ selected, onToggle }) => (
      <div>
        {Array.from({ length: 2 }, (_, i) => (
          <FormField key={i}>
            <Radio
              checked={selected == i}
              input={
                <input id={`radio-${i + 1}`} onChange={() => onToggle(i)} />
              }
            />
            <label htmlFor={`radio-${i + 1}`}>{`Default Radio ${i + 1}`}</label>
          </FormField>
        ))}
      </div>
    )}
  />
)

export const Disabled = () => (
  <RadioDemo
    radios={({ selected }) => (
      <div>
        {Array.from({ length: 2 }, (_, i) => (
          <FormField key={i}>
            <Radio
              disabled
              checked={selected == i}
              input={<input id={`radio-${i + 1}`} />}
            />
            <label htmlFor={`radio-${i + 1}`}>{`Disabled Radio ${i +
              1}`}</label>
          </FormField>
        ))}
      </div>
    )}
  />
)
