import * as React from 'react'
// @ts-ignore no .d.ts file
import { MDCTabBar } from '@material/tab-bar'
import { materialize, EventHandler, withControl } from '../Base'

export interface BarProps {
  focusOnActivate?: boolean
  useAutomaticActivation?: boolean
  onActivate?: EventHandler
}

class Bar extends withControl(MDCTabBar) {
  render() {
    return <div {...this.props} ref={this.control} role="tablist" />
  }
}

export default materialize('mdc-tab-bar', {
  displayName: 'TabBar',
})(Bar)
