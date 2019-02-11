import * as React from 'react'
import { materialize } from '../Base'

const cssProps = {
  fixedColumnWidth: 'fixed-column-width',
  alignLeft: 'align-left',
  alignRight: 'align-right',
}

export default materialize('mdc-layout-grid', {
  cssProps,
  displayName: 'LayoutGrid',
})('div')
