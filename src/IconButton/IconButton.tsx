import * as React from 'react'
// @ts-ignore no .d.ts file
import { MDCIconButtonToggle } from '@material/icon-button'
import MaterialIcon from '../MaterialIcon/MaterialIcon'
import {
  withControl,
  materialize,
  ClassNameForwardingComponent,
  CssProps,
  EventHandler,
} from '../Base'

type IconType = string | React.ReactElement<any>
interface IconProps {
  on?: boolean
}
const ToggleIcon = materialize<IconProps>('mdc-icon-button__icon', {
  cssProps: ['on'],
})(ClassNameForwardingComponent)

export interface IconButtonProps {
  on?: boolean
  icon: IconType
  iconOn?: IconType
  onChange?: EventHandler
}

const cssProps: CssProps<IconButtonProps> = ['on']

class IconButton extends withControl<IconButtonProps>(MDCIconButtonToggle, {
  events: {
    'MDCIconButtonToggle:change': 'onChange',
  },
  controlProps: ['on'],
}) {
  renderIcon(icon: IconType, on: boolean) {
    if (typeof icon === 'string') {
      return (
        <ToggleIcon on={on}>
          <MaterialIcon icon={icon} />
        </ToggleIcon>
      )
    }

    return <ToggleIcon on={on}>{icon}</ToggleIcon>
  }

  render() {
    const { on, icon, iconOn, onChange, ...props } = this.props
    if (iconOn) {
      return (
        <button
          {...props}
          aria-hidden={true}
          aria-pressed={on}
          ref={this.control}
        >
          {this.renderIcon(iconOn, true)}
          {this.renderIcon(icon, false)}
        </button>
      )
    }

    if (typeof icon === 'string') {
      return (
        <button {...props}>
          <MaterialIcon icon={icon} />
        </button>
      )
    }

    return <button {...props}>{icon}</button>
  }
}

export default materialize<IconButtonProps>('mdc-icon-button', {
  cssProps,
  keepCssProps: ['on'],
})(IconButton)
