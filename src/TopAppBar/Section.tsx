import * as React from 'react'
import { materialize, CssProps } from '../Base'

export interface SectionProps {
  alignStart?: boolean
  alignEnd?: boolean
}

const cssProps: CssProps<SectionProps> = {
  alignStart: 'align-start',
  alignEnd: 'align-end',
}

export default materialize<SectionProps>('mdc-top-app-bar__section', {
  cssProps,
  displayName: 'TopAppBarSection',
})('section')
