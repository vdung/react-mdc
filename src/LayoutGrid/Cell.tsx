import * as React from 'react'
import { materialize, CssProps } from '../Base'

interface GridCellProps {
  span?: number
  desktopSpan?: number
  tabletSpan?: number
  phoneSpan?: number
  order?: number
  alignTop?: boolean
  alignMiddle: boolean
  alignBottom: boolean
}

const cssProps: CssProps<GridCellProps> = {
  span({ span }) {
    return `span-${span}`
  },
  desktopSpan({ desktopSpan }) {
    return `span-${desktopSpan}-desktop`
  },
  tabletSpan({ tabletSpan }) {
    return `span-${tabletSpan}-tablet`
  },
  phoneSpan({ phoneSpan }) {
    return `span-${phoneSpan}-phone`
  },
  order({ order }) {
    return `order-${order}`
  },
  alignTop: 'align-top',
  alignMiddle: 'align-middle',
  alignBottom: 'align-bottom',
}

export default materialize<GridCellProps>('mdc-layout-grid__cell', {
  cssProps,
  displayName: 'LayoutGridCell',
})('div')
