import * as React from 'react'
import MaterialIcon from '../MaterialIcon/MaterialIcon'
import { materialize, withDefaultTag } from '../Base'

export default materialize('mdc-text-field__icon', {
  displayName: 'TextFieldIcon',
})(withDefaultTag(MaterialIcon))
