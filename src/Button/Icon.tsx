import * as React from 'react'
import Icon from '../Icon/Icon'
import { materialize, withDefaultTag } from '../Base'

export default materialize('mdc-button__icon', {
  displayName: 'ButtonIcon',
})(withDefaultTag(Icon))
