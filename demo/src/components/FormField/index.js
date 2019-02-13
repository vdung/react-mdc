import React from 'react'
import { FormField } from '@vdung/react-mdc'

export const Basic = () => (
  <FormField>
    <input />
    <label>Label</label>
  </FormField>
)

export const AlignEnd = () => (
  <FormField alignEnd>
    <input />
    <label>Label</label>
  </FormField>
)
