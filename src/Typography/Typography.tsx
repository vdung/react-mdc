import * as React from 'react'
import { materialize, ClassNameForwardingComponent } from '../Base'

const cssProps = [
  'display4',
  'display3',
  'display2',
  'display1',
  'headline',
  'title',
  'subheading2',
  'subheading1',
  'body2',
  'body1',
  'caption',
  'button',
]

export default materialize('mdc-typography', {
  cssProps,
  displayName: 'Typography',
})(ClassNameForwardingComponent)
