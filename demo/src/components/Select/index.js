import React from 'react'
import PropTypes from 'prop-types'
import {
  Select,
  SelectSelectedText,
  SelectMenu,
  SelectOptions,
  SelectItem,
} from '@vdung/react-mdc'

class SelectDemo extends React.Component {
  static propTypes = {
    select: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  }

  state = {
    selected: null,
  }

  handleChange = ({ detail: { selectedIndex } }) => {
    this.setState({
      selected: selectedIndex,
    })
  }

  render() {
    const SelectComponent = this.props.select

    return (
      <SelectComponent
        selectedIndex={this.state.selected}
        onChange={this.handleChange}
      />
    )
  }
}

const items = ['Fruit Roll Ups', 'Candy (cotton)', 'Vegetables', 'Noodles']

export const Basic = () => (
  <SelectDemo
    select={({ selectedIndex, onChange }) => (
      <Select
        label="Food Group"
        selectedIndex={selectedIndex}
        onChange={onChange}
      >
        <SelectOptions>
          {items.map((value, index) => (
            <option
              selected={selectedIndex === index}
              key={index}
              value={value}
              disabled={value === 'Vegetables'}
            >
              {value}
            </option>
          ))}
        </SelectOptions>
      </Select>
    )}
  />
)

export const Outlined = () => (
  <SelectDemo
    select={({ selectedIndex, onChange }) => (
      <Select
        outlined
        label="Food Group"
        selectedIndex={selectedIndex}
        onChange={onChange}
      >
        <SelectOptions>
          {items.map((value, index) => (
            <option
              selected={selectedIndex === index}
              key={index}
              value={value}
              disabled={value === 'Vegetables'}
            >
              {value}
            </option>
          ))}
        </SelectOptions>
      </Select>
    )}
  />
)

export const Enhanced = () => (
  <SelectDemo
    select={({ selectedIndex, onChange }) => (
      <Select
        label="Food Group"
        selectedIndex={selectedIndex}
        onChange={onChange}
      >
        <SelectSelectedText />
        <SelectMenu>
          {items.map((value, index) => (
            <SelectItem
              selected={selectedIndex === index}
              key={index}
              value={value}
              disabled={value === 'Vegetables'}
            >
              {value}
            </SelectItem>
          ))}
        </SelectMenu>
      </Select>
    )}
  />
)
