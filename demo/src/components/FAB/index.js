import React from 'react'
import './FAB.css'

import { FAB, FABIcon, MaterialIcon, Ripple } from '@vdung/react-mdc'

export const Fixed = () => (
  <Ripple>
    <FAB className="fab-button__fixed">
      <FABIcon>
        <MaterialIcon>add</MaterialIcon>
      </FABIcon>
    </FAB>
  </Ripple>
)

export const Mini = () => (
  <Ripple>
    <FAB mini>
      <FABIcon>
        <MaterialIcon>add</MaterialIcon>
      </FABIcon>
    </FAB>
  </Ripple>
)
