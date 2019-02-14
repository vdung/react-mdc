import * as React from 'react'
import { materialize, withDefaultTag } from '../Base'

export interface MaterialIconProps {
  icon?: string
  children?: string
}

const MaterialIcon = React.forwardRef<HTMLElement, MaterialIconProps>(
  ({ icon, children, ...props }, ref) => (
    <i {...props} ref={ref}>
      {icon || children}
    </i>
  )
)

export default materialize<MaterialIconProps>('material-icons', {
  displayName: 'MaterialIcon',
})(withDefaultTag(MaterialIcon))
