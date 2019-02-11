import * as React from 'react'
import Icon from '../Icon/Icon'
import { materialize, withDefaultTag } from '../Base'

export default materialize('mdc-text-field__icon', {
  displayName: 'Icon',
})(withDefaultTag(Icon))
