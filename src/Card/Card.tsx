import * as React from 'react'
import { materialize, CssProps } from '../Base'

export interface CardProps {
  stroked?: boolean
}

const cssProps: CssProps<CardProps> = ['stroked']

export default materialize<CardProps>('mdc-card', {
  cssProps,
  displayName: 'Card',
})('div')
