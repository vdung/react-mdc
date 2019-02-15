import * as React from 'react'
import InnerList from '../List/List'
import { ForwardRefType } from '../Base'

type ListType = ForwardRefType<typeof InnerList>
const List = React.forwardRef<ListType, React.ComponentProps<ListType>>(
  (props, ref) => <InnerList {...props} ref={ref} />
)

List.displayName = 'DrawerList'

export default List
