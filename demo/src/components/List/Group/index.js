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
  Icon,
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
          <Icon>folder</Icon>
        </ListItemGraphic>
        <ListItemText>
          <ListItemPrimaryText>Photo</ListItemPrimaryText>
          <ListItemSecondaryText>Jan 9, 2014</ListItemSecondaryText>
        </ListItemText>
        <ListItemMeta>
          <Icon>info</Icon>
        </ListItemMeta>
      </ListItem>
      <ListItem>
        <ListItemGraphic className="list-item__demo-graphic">
          <Icon>folder</Icon>
        </ListItemGraphic>
        <ListItemText>
          <ListItemPrimaryText>Recipes</ListItemPrimaryText>
          <ListItemSecondaryText>Jan 17, 2014</ListItemSecondaryText>
        </ListItemText>
        <ListItemMeta>
          <Icon>info</Icon>
        </ListItemMeta>
      </ListItem>
      <ListItem>
        <ListItemGraphic className="list-item__demo-graphic">
          <Icon>folder</Icon>
        </ListItemGraphic>
        <ListItemText>
          <ListItemPrimaryText>Work</ListItemPrimaryText>
          <ListItemSecondaryText>Jan 28, 2014</ListItemSecondaryText>
        </ListItemText>
        <ListItemMeta>
          <Icon>info</Icon>
        </ListItemMeta>
      </ListItem>
    </List>
    <ListGroupDivider inset />
    <ListGroupHeader>Files</ListGroupHeader>
    <List twoLine avatarList>
      <ListItem>
        <ListItemGraphic className="list-item__demo-graphic">
          <Icon>insert_drive_file</Icon>
        </ListItemGraphic>
        <ListItemText>
          <ListItemPrimaryText>Vacation Itinerary</ListItemPrimaryText>
          <ListItemSecondaryText>Jan 10, 2014</ListItemSecondaryText>
        </ListItemText>
        <ListItemMeta>
          <Icon>info</Icon>
        </ListItemMeta>
      </ListItem>
      <ListItem>
        <ListItemGraphic className="list-item__demo-graphic">
          <Icon>insert_drive_file</Icon>
        </ListItemGraphic>
        <ListItemText>
          <ListItemPrimaryText>Kitchen Remodel</ListItemPrimaryText>
          <ListItemSecondaryText>Jan 20, 2014</ListItemSecondaryText>
        </ListItemText>
        <ListItemMeta>
          <Icon>info</Icon>
        </ListItemMeta>
      </ListItem>
    </List>
  </ListGroup>
)
