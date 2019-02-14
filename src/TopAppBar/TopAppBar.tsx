import * as React from 'react'
// @ts-ignore no .d.ts file
import { MDCTopAppBar } from '@material/top-app-bar'
import { materialize, withControl, CssProps, EventHandler } from '../Base'

const Row = materialize('mdc-top-app-bar__row')('div')

export interface TopAppBarProps {
  fixed?: boolean
  prominent?: boolean
  dense?: boolean
  short?: boolean
  shortCollapsed?: boolean
  onNav?: EventHandler
}

const cssProps: CssProps<TopAppBarProps> = {
  fixed: 'fixed',
  prominent: 'prominent',
  dense: 'dense',
  short: 'short',
  shortCollapsed: 'short-collapsed',
}

class TopAppBar extends withControl<TopAppBarProps>(MDCTopAppBar, {
  events: {
    onNav: 'MDCTopAppBar:nav',
  },
}) {
  render() {
    const { children, ...props } = this.props
    return (
      <header {...props} ref={this.control}>
        <Row>{children}</Row>
      </header>
    )
  }
}

export default materialize<TopAppBarProps>('mdc-top-app-bar', {
  cssProps,
  displayName: 'TopAppBar',
})(TopAppBar)
