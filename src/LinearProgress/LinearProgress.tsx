import * as React from 'react'
// @ts-ignore no .d.ts file
import { MDCLinearProgress } from '@material/linear-progress'
import { materialize, withControl } from '../Base'

const BufferingDot = materialize('mdc-linear-progress__buffering-dots')('div')
const Buffer = materialize('mdc-linear-progress__buffer')('div')
const Bar = materialize('mdc-linear-progress__bar')('div')
const PrimaryBar = materialize('mdc-linear-progress__primary-bar')(Bar)
const SecondaryBar = materialize('mdc-linear-progress__secondary-bar')(Bar)
const BarInner = materialize('mdc-linear-progress__bar-inner')('span')

export interface LinearProgressProps {
  progress?: number
  indeterminate?: boolean
  buffer?: number
}

const cssProps = ['reversed', 'indeterminate', 'closed']

class LinearProgress extends withControl<LinearProgressProps>(
  MDCLinearProgress,
  {
    controlProps: ['progress', 'buffer'],
  }
) {
  render() {
    const { progress, indeterminate, buffer, ...props } = this.props
    return (
      <div role="progressbar" {...props} ref={this.control}>
        <BufferingDot />
        <Buffer />
        <PrimaryBar>
          <BarInner />
        </PrimaryBar>
        <SecondaryBar>
          <BarInner />
        </SecondaryBar>
      </div>
    )
  }
}

export default materialize('mdc-linear-progress', { cssProps })(LinearProgress)
