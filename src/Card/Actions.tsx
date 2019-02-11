import * as React from 'react'
import { materialize, CssProps } from '../Base'

export interface CardActionsProps {
  fullBleed?: boolean
}

const cssProps: CssProps<CardActionsProps> = {
  fullBleed: 'full-bleed',
}

export default materialize<CardActionsProps>('mdc-card__actions', {
  cssProps,
  displayName: 'CardActions',
})('div')
