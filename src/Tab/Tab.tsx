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
  indicator?: React.ComponentType<IndicatorProps>
}

const cssProps: CssProps<TabProps> = {
  active: 'active',
  stacked: 'stacked',
  minWidth: 'min-width',
}

class Tab extends withControl<TabProps>(MDCTab, {
  controlProps: ['focusOnActivate'],
}) {
  render() {
    const { active, children, indicator, ...props } = this.props
    const IndicatorComponent = indicator

    return (
      <button {...props} ref={this.control}>
        <Content>
          {children}
          {IndicatorComponent ? null : <Indicator active={active} />}
        </Content>
        {IndicatorComponent ? <IndicatorComponent active={active} /> : null}
        <Ripple />
      </button>
    )
  }
}

export default materialize<TabProps>('mdc-tab', {
  cssProps,
  keepCssProps: ['active'],
})(Tab)
