import * as React from 'react'
// @ts-ignore no .d.ts file
import { MDCTabIndicator } from '@material/tab-indicator'
import IndicatorContent, { IndicatorContentProps } from './IndicatorContent'
import { materialize, withControl, CssProps } from '../Base'

export interface IndicatorProps {
  active?: boolean
  fade?: boolean
  content?: React.ReactType<IndicatorContentProps>
}

const cssProps: CssProps<IndicatorProps> = ['active', 'fade']

class Indicator extends withControl<IndicatorProps>(MDCTabIndicator) {
  renderContent() {
    if (this.props.content) {
      return <this.props.content>{this.props.children}</this.props.content>
    }

    return <IndicatorContent underline>{this.props.children}</IndicatorContent>
  }

  render() {
    const { active, fade, content, children, ...props } = this.props

    return (
      <span {...props} ref={this.control}>
        {this.renderContent()}
      </span>
    )
  }
}

export default materialize<IndicatorProps>('mdc-tab-indicator', { cssProps })(
  Indicator
)
