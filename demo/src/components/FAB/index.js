import React from 'react'
import './FAB.css'

import { FAB, FABIcon, Icon, Ripple } from '@vdung/react-mdc'

export const Fixed = () => (
  <Ripple>
    <FAB className="fab-button__fixed">
      <FABIcon>
        <Icon>add</Icon>
      </FABIcon>
    </FAB>
  </Ripple>
)

export const Mini = () => (
  <Ripple>
    <FAB mini>
      <FABIcon>
        <Icon>add</Icon>
      </FABIcon>
    </FAB>
  </Ripple>
)
