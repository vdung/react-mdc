import * as React from 'react'
// @ts-ignore no .d.ts file
import { MDCTabIndicator } from '@material/tab-indicator'
import IndicatorContent from './IndicatorContent'
import { materialize, withControl, CssProps } from '../Base'

export interface IndicatorProps {
  active?: boolean
  fade?: boolean
  children?: React.ReactElement<any>
}

const cssProps: CssProps<IndicatorProps> = ['active', 'fade']

class Indicator extends withControl<IndicatorProps>(MDCTabIndicator) {
  renderContent(children?: React.ReactElement<any>) {
    if (children) {
      return children
    }

    return <IndicatorContent underline />
  }

  render() {
    const { children, ...props } = this.props

    return (
      <span {...props} ref={this.control}>
        {this.renderContent(children)}
      </span>
    )
  }
}

export default materialize<IndicatorProps>('mdc-tab-indicator', {
  cssProps,
  displayName: 'TabIndicator',
})(Indicator)
