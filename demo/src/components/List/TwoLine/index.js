import React from 'react'
import '../List.css'
import {
  List,
  ListItem,
  ListItemGraphic,
  ListItemMeta,
  ListItemPrimaryText,
  ListItemSecondaryText,
  ListItemText,
  MaterialIcon,
} from '@vdung/react-mdc'

export const TextOnly = () => (
  <List twoLine>
    {Array.from({ length: 3 }, (_, i) => (
      <ListItem key={i}>
        <ListItemText>
          <ListItemPrimaryText>Two-line item</ListItemPrimaryText>
          <ListItemSecondaryText>Secondary text</ListItemSecondaryText>
        </ListItemText>
      </ListItem>
    ))}
  </List>
)

export const TextOnlyDense = () => (
  <List twoLine dense>
    {Array.from({ length: 3 }, (_, i) => (
      <ListItem key={i}>
        <ListItemText>
          <ListItemPrimaryText>Two-line item</ListItemPrimaryText>
          <ListItemSecondaryText>Secondary text</ListItemSecondaryText>
        </ListItemText>
      </ListItem>
    ))}
  </List>
)

export const Graphic = () => (
  <List twoLine>
    {Array.from({ length: 3 }, (_, i) => (
      <ListItem key={i}>
        <ListItemGraphic className="list-item__demo-graphic" />
        <ListItemText>
          <ListItemPrimaryText>Two-line item</ListItemPrimaryText>
          <ListItemSecondaryText>Secondary text</ListItemSecondaryText>
        </ListItemText>
      </ListItem>
    ))}
  </List>
)

export const GraphicDense = () => (
  <List twoLine dense>
    {Array.from({ length: 3 }, (_, i) => (
      <ListItem key={i}>
        <ListItemGraphic className="list-item__demo-graphic" />
        <ListItemText>
          <ListItemPrimaryText>Two-line item</ListItemPrimaryText>
          <ListItemSecondaryText>Secondary text</ListItemSecondaryText>
        </ListItemText>
      </ListItem>
    ))}
  </List>
)

export const Avatar = () => (
  <List twoLine avatarList>
    {Array.from({ length: 3 }, (_, i) => (
      <ListItem key={i}>
        <ListItemGraphic className="list-item__demo-graphic" />
        <ListItemText>
          <ListItemPrimaryText>Two-line item</ListItemPrimaryText>
          <ListItemSecondaryText>Secondary text</ListItemSecondaryText>
        </ListItemText>
      </ListItem>
    ))}
  </List>
)

export const AvatarDense = () => (
  <List twoLine avatarList dense>
    {Array.from({ length: 3 }, (_, i) => (
      <ListItem key={i}>
        <ListItemGraphic className="list-item__demo-graphic" />
        <ListItemText>
          <ListItemPrimaryText>Two-line item</ListItemPrimaryText>
          <ListItemSecondaryText>Secondary text</ListItemSecondaryText>
        </ListItemText>
      </ListItem>
    ))}
  </List>
)

export const Metadata = () => (
  <List twoLine>
    {Array.from({ length: 3 }, (_, i) => (
      <ListItem key={i}>
        <ListItemText>
          <ListItemPrimaryText>Two-line item</ListItemPrimaryText>
          <ListItemSecondaryText>Secondary text</ListItemSecondaryText>
        </ListItemText>
        <ListItemMeta>{`$${i + 1}0.00`}</ListItemMeta>
      </ListItem>
    ))}
  </List>
)

export const MetadataDense = () => (
  <List twoLine dense>
    {Array.from({ length: 3 }, (_, i) => (
      <ListItem key={i}>
        <ListItemText>
          <ListItemPrimaryText>Two-line item</ListItemPrimaryText>
          <ListItemSecondaryText>Secondary text</ListItemSecondaryText>
        </ListItemText>
        <ListItemMeta>{`$${i + 1}0.00`}</ListItemMeta>
      </ListItem>
    ))}
  </List>
)

export const AvatarMetadata = () => (
  <List twoLine avatarList>
    {Array.from({ length: 3 }, (_, i) => (
      <ListItem key={i}>
        <ListItemGraphic className="list-item__demo-graphic" />
        <ListItemText>
          <ListItemPrimaryText>Two-line item</ListItemPrimaryText>
          <ListItemSecondaryText>Secondary text</ListItemSecondaryText>
        </ListItemText>
        <ListItemMeta>{`$${i + 1}0.00`}</ListItemMeta>
      </ListItem>
    ))}
  </List>
)

export const AvatarMetadataDense = () => (
  <List twoLine avatarList dense>
    {Array.from({ length: 3 }, (_, i) => (
      <ListItem key={i}>
        <ListItemGraphic className="list-item__demo-graphic" />
        <ListItemText>
          <ListItemPrimaryText>Two-line item</ListItemPrimaryText>
          <ListItemSecondaryText>Secondary text</ListItemSecondaryText>
        </ListItemText>
        <ListItemMeta>{`$${i + 1}0.00`}</ListItemMeta>
      </ListItem>
    ))}
  </List>
)

export const AvatarMetadataTextIcon = () => (
  <List twoLine avatarList>
    <ListItem>
      <ListItemGraphic className="list-item__demo-graphic">
        <MaterialIcon>folder</MaterialIcon>
      </ListItemGraphic>
      <ListItemText>
        <ListItemPrimaryText>Photo</ListItemPrimaryText>
        <ListItemSecondaryText>Jan 9, 2014</ListItemSecondaryText>
      </ListItemText>
      <ListItemMeta>
        <MaterialIcon>info</MaterialIcon>
      </ListItemMeta>
    </ListItem>
    <ListItem>
      <ListItemGraphic className="list-item__demo-graphic">
        <MaterialIcon>folder</MaterialIcon>
      </ListItemGraphic>
      <ListItemText>
        <ListItemPrimaryText>Recipes</ListItemPrimaryText>
        <ListItemSecondaryText>Jan 17, 2014</ListItemSecondaryText>
      </ListItemText>
      <ListItemMeta>
        <MaterialIcon>info</MaterialIcon>
      </ListItemMeta>
    </ListItem>
    <ListItem>
      <ListItemGraphic className="list-item__demo-graphic">
        <MaterialIcon>folder</MaterialIcon>
      </ListItemGraphic>
      <ListItemText>
        <ListItemPrimaryText>Work</ListItemPrimaryText>
        <ListItemSecondaryText>Jan 28, 2014</ListItemSecondaryText>
      </ListItemText>
      <ListItemMeta>
        <MaterialIcon>info</MaterialIcon>
      </ListItemMeta>
    </ListItem>
  </List>
)
