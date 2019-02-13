import React from 'react'
import '../List.css'
import {
  List,
  ListItem,
  ListItemGraphic,
  ListItemMeta,
  Icon,
} from '@vdung/react-mdc'

export const TextOnly = () => (
  <List>
    {Array.from({ length: 3 }, (_, i) => (
      <ListItem key={i}>Single-line item</ListItem>
    ))}
  </List>
)

export const TextOnlyDense = () => (
  <List dense>
    {Array.from({ length: 3 }, (_, i) => (
      <ListItem key={i}>Single-line item</ListItem>
    ))}
  </List>
)

export const Graphic = () => (
  <List>
    {Array.from({ length: 3 }, (_, i) => (
      <ListItem key={i}>
        <ListItemGraphic className="list-item__demo-graphic" />
        Single-line item
      </ListItem>
    ))}
  </List>
)

export const GraphicDense = () => (
  <List dense>
    {Array.from({ length: 3 }, (_, i) => (
      <ListItem key={i}>
        <ListItemGraphic className="list-item__demo-graphic" />
        Single-line item
      </ListItem>
    ))}
  </List>
)

export const IconWithText = () => (
  <List>
    <ListItem>
      <ListItemGraphic>
        <Icon>network_wifi</Icon>
      </ListItemGraphic>
      Wi-Fi
    </ListItem>
    <ListItem>
      <ListItemGraphic>
        <Icon>bluetooth</Icon>
      </ListItemGraphic>
      Bluetooth
    </ListItem>
    <ListItem>
      <ListItemGraphic>
        <Icon>data_usage</Icon>
      </ListItemGraphic>
      Data Usage
    </ListItem>
  </List>
)

export const Avatar = () => (
  <List avatarList>
    {Array.from({ length: 3 }, (_, i) => (
      <ListItem key={i}>
        <ListItemGraphic className="list-item__demo-graphic" />
        Single-line item
      </ListItem>
    ))}
  </List>
)

export const AvatarDense = () => (
  <List avatarList dense>
    {Array.from({ length: 3 }, (_, i) => (
      <ListItem key={i}>
        <ListItemGraphic className="list-item__demo-graphic" />
        Single-line item
      </ListItem>
    ))}
  </List>
)

export const Metadata = () => (
  <List>
    {Array.from({ length: 3 }, (_, i) => (
      <ListItem key={i}>
        Single-line item
        <ListItemMeta>{`$${i + 1}0.00`}</ListItemMeta>
      </ListItem>
    ))}
  </List>
)

export const MetadataDense = () => (
  <List dense>
    {Array.from({ length: 3 }, (_, i) => (
      <ListItem key={i}>
        Single-line item
        <ListItemMeta>{`$${i + 1}0.00`}</ListItemMeta>
      </ListItem>
    ))}
  </List>
)

export const AvatarMetadata = () => (
  <List avatarList>
    {Array.from({ length: 3 }, (_, i) => (
      <ListItem key={i}>
        <ListItemGraphic className="list-item__demo-graphic" />
        Single-line item
        <ListItemMeta>{`$${i + 1}0.00`}</ListItemMeta>
      </ListItem>
    ))}
  </List>
)

export const AvatarMetadataDense = () => (
  <List avatarList dense>
    {Array.from({ length: 3 }, (_, i) => (
      <ListItem key={i}>
        <ListItemGraphic className="list-item__demo-graphic" />
        Single-line item
        <ListItemMeta>{`$${i + 1}0.00`}</ListItemMeta>
      </ListItem>
    ))}
  </List>
)
