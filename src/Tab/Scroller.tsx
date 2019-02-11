import * as React from 'react'
// @ts-ignore no .d.ts file
import { MDCTabScroller } from '@material/tab-scroller'
import { materialize, withControl, CssProps } from '../Base'

const ScrollArea = materialize('mdc-tab-scroller__scroll-area')('div')
const ScrollContent = materialize('mdc-tab-scroller__scroll-content')('div')

const cssProps: CssProps<ScrollerProps> = {
  alignStart: 'align-start',
  alignEnd: 'align-end',
  alignCenter: 'align-center',
}

export interface ScrollerProps {
  alignStart?: boolean
  alignEnd?: boolean
  alignCenter?: boolean
}

class Scroller extends withControl<ScrollerProps>(MDCTabScroller) {
  render() {
    const { children, ...props } = this.props
    return (
      <div {...props} ref={this.control}>
        <ScrollArea>
          <ScrollContent>{children}</ScrollContent>
        </ScrollArea>
      </div>
    )
  }
}

export default materialize<ScrollerProps>('mdc-tab-scroller', {
  cssProps,
  displayName: 'TabScroller',
})(Scroller)
