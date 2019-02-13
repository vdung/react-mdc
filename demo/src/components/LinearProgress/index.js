import React from 'react'
import { LinearProgress } from '@vdung/react-mdc'

export const Determinate = () => <LinearProgress progress={0.5} />

export const Indeterminate = () => <LinearProgress indeterminate />

export const Buffer = () => <LinearProgress progress={0.5} buffer={0.75} />

export const Reversed = () => <LinearProgress progress={0.5} reversed />

export const IndeterminateReversed = () => (
  <LinearProgress indeterminate reversed />
)

export const BufferReversed = () => (
  <LinearProgress progress={0.5} buffer={0.75} reversed />
)
