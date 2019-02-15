import * as React from 'react'
// @ts-ignore no .d.ts file
import { MDCList } from '@material/list'
import { materialize, withControl, withDefaultTag } from '../Base'

export interface ListProps extends React.HTMLProps<HTMLElement> {
  dense?: boolean
  twoLine?: boolean
  avatarList?: boolean
  nonInteractive?: boolean
  singleSelection?: boolean
  wrapFocus?: boolean
  verticalOrientation?: boolean
  tag?: React.ReactType
}

const cssProps = {
  dense: 'dense',
  twoLine: 'two-line',
  avatarList: 'avatar-list',
  nonInteractive: 'non-interactive',
}

const Container = withDefaultTag('ul')
class List extends withControl<ListProps>(MDCList, {
  controlProps: ['singleSelection', 'wrapFocus', 'verticalOrientation'],
}) {
  render() {
    return <Container {...this.props} ref={this.control} />
  }
}

export default materialize<ListProps>('mdc-list', {
  cssProps,
  displayName: 'List',
})(List)
