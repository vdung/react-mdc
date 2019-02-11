import * as React from 'react'
import { materialize } from '../Base'

export interface ListProps {
  dense?: boolean
  twoLine?: boolean
  avatarList?: boolean
  nonInteractive?: boolean
}

const cssProps = {
  dense: 'dense',
  twoLine: 'two-line',
  avatarList: 'avatar-list',
  nonInteractive: 'non-interactive',
}

export default materialize<ListProps>('mdc-list', {
  cssProps,
  displayName: 'List',
})('ul')
