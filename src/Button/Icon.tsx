import * as React from 'react'
import MaterialIcon from '../MaterialIcon/MaterialIcon'
import { materialize, withDefaultTag } from '../Base'

export default materialize('mdc-button__icon', {
  displayName: 'ButtonIcon',
})(withDefaultTag(MaterialIcon))
