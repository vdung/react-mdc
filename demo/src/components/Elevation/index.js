import React from 'react'
import './Elevation.css'

import { Elevation } from '@vdung/react-mdc'

export const All = () => (
  <div className="elevation__surface">
    {Array.from({ length: 25 }, (_, i) => (
      <Elevation z={i} key={i}>
        <div className="elevation__cell">
          <code>{`Elevation z={${i}}`}</code>
        </div>
      </Elevation>
    ))}
  </div>
)
