import * as React from 'react'
import { materialize, withDefaultTag } from '../Base'

export interface MaterialIconProps {
  icon?: string
  children?: string
}

const MaterialIcon: React.FunctionComponent<MaterialIconProps> = ({
  icon,
  children,
  ...props
}) => <i {...props}>{icon || children}</i>

export default materialize<MaterialIconProps>('material-icons', {
  displayName: 'MaterialIcon',
})(withDefaultTag(MaterialIcon))
