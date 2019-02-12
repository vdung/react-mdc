import * as React from 'react'
// @ts-ignore no .d.ts file
import { MDCTab } from '@material/tab'
import Indicator, { IndicatorProps } from './Indicator'
import { materialize, withControl, CssProps } from '../Base'

const Content = materialize('mdc-tab__content')('span')
const Ripple = materialize('mdc-tab__ripple')('span')

export interface TabProps extends React.HTMLProps<HTMLButtonElement> {
  active?: boolean
  focusOnActivate?: boolean
  stacked?: boolean
  minWidth?: boolean
  indicator?: React.ReactElement<IndicatorProps>
  indicatorMinWidth?: boolean
}

const cssProps: CssProps<TabProps> = {
  active: 'active',
  stacked: 'stacked',
  minWidth: 'min-width',
}

class Tab extends withControl<TabProps>(MDCTab, {
  controlProps: ['focusOnActivate'],
}) {
  renderIndicator(
    indicator: React.ReactElement<IndicatorProps> | undefined,
    active: boolean | undefined
  ) {
    if (indicator) {
      return React.cloneElement(indicator, {
        active,
      })
    }

    return <Indicator active={active} />
  }

  render() {
    const {
      active,
      children,
      indicator,
      indicatorMinWidth,
      ...props
    } = this.props

    return (
      <button {...props} ref={this.control}>
        <Content>
          {children}
          {indicatorMinWidth ? this.renderIndicator(indicator, active) : null}
        </Content>
        {indicatorMinWidth ? null : this.renderIndicator(indicator, active)}
        <Ripple />
      </button>
    )
  }
}

export default materialize<TabProps>('mdc-tab', {
  cssProps,
  keepCssProps: ['active'],
})(Tab)
