import * as React from 'react'
import ListItemGraphic from '../List/ItemGraphic'
import { materialize, withDefaultTag } from '../Base'

export default materialize('mdc-menu__selection-group-icon', {
  displayName: 'MenuSelectionGroupIcon',
})(withDefaultTag(ListItemGraphic))
