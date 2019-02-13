import React from 'react'
import '../List.css'
import { List, ListItem, ListDivider, ListItemGraphic } from '@vdung/react-mdc'

export const FullWidth = () => (
  <List>
    {Array.from({ length: 3 }, (_, i) => (
      <ListItem key={i}>Single-line item - section 1</ListItem>
    ))}
    <ListDivider />
    {Array.from({ length: 2 }, (_, i) => (
      <ListItem key={i}>Single-line item - section 2</ListItem>
    ))}
  </List>
)

export const Insets = () => (
  <List avatarList>
    {Array.from({ length: 3 }, (_, i) => (
      <ListItem key={i}>
        <ListItemGraphic className="list-item__demo-graphic" />
        Single-line item - section 1
      </ListItem>
    ))}
    <ListDivider inset />
    {Array.from({ length: 2 }, (_, i) => (
      <ListItem key={i}>
        <ListItemGraphic className="list-item__demo-graphic" />
        Single-line item - section 2
      </ListItem>
    ))}
  </List>
)
