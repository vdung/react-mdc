import React from 'react'
import '../List.css'
import {
  List,
  ListGroup,
  ListGroupDivider,
  ListGroupHeader,
  ListItem,
  ListItemGraphic,
  ListItemMeta,
  ListItemPrimaryText,
  ListItemSecondaryText,
  ListItemText,
  MaterialIcon,
} from '@vdung/react-mdc'

export const Basic = () => (
  <ListGroup>
    <ListGroupHeader>List 1</ListGroupHeader>
    <List>
      {Array.from({ length: 3 }, (_, i) => (
        <ListItem key={i}>Single-line item</ListItem>
      ))}
    </List>
    <ListGroupDivider />
    <ListGroupHeader>List 2</ListGroupHeader>
    <List>
      {Array.from({ length: 3 }, (_, i) => (
        <ListItem key={i}>Single-line item</ListItem>
      ))}
    </List>
  </ListGroup>
)

export const TwoLineAvatarMetadataInset = () => (
  <ListGroup>
    <ListGroupHeader>Folders</ListGroupHeader>
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
    <ListGroupDivider inset />
    <ListGroupHeader>Files</ListGroupHeader>
    <List twoLine avatarList>
      <ListItem>
        <ListItemGraphic className="list-item__demo-graphic">
          <MaterialIcon>insert_drive_file</MaterialIcon>
        </ListItemGraphic>
        <ListItemText>
          <ListItemPrimaryText>Vacation Itinerary</ListItemPrimaryText>
          <ListItemSecondaryText>Jan 10, 2014</ListItemSecondaryText>
        </ListItemText>
        <ListItemMeta>
          <MaterialIcon>info</MaterialIcon>
        </ListItemMeta>
      </ListItem>
      <ListItem>
        <ListItemGraphic className="list-item__demo-graphic">
          <MaterialIcon>insert_drive_file</MaterialIcon>
        </ListItemGraphic>
        <ListItemText>
          <ListItemPrimaryText>Kitchen Remodel</ListItemPrimaryText>
          <ListItemSecondaryText>Jan 20, 2014</ListItemSecondaryText>
        </ListItemText>
        <ListItemMeta>
          <MaterialIcon>info</MaterialIcon>
        </ListItemMeta>
      </ListItem>
    </List>
  </ListGroup>
)
