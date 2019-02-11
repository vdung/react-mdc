import * as React from 'react'
import { materialize, CssProps } from '../Base'

const aspects = ['square', '16-9']

export interface CardMediaProps {
  aspect: string
}

const cssProps: CssProps<CardMediaProps> = {
  aspect({ aspect }) {
    if (aspects.includes(aspect)) {
      return aspect
    }
  },
}

export default materialize<CardMediaProps>('mdc-card__media', {
  cssProps,
  displayName: 'CardMedia',
})('div')
