import * as React from 'react'
import { materialize, CssProps } from '../Base'

export interface IndicatorContentProps {
  underline?: boolean
  icon?: boolean
}

const cssProps: CssProps<IndicatorContentProps> = ['underline', 'icon']

export default materialize<IndicatorContentProps>(
  'mdc-tab-indicator__content',
  {
    cssProps,
    displayName: 'TabIndicatorContent',
  }
)('span')
