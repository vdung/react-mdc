import React from 'react'
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionIcons,
  CardMediaContent,
  Typography,
  Button,
  MaterialIcon,
  Ripple,
  ListGroupDivider,
  IconButton,
} from '@vdung/react-mdc'
import './Card.css'
import image16x9 from '../../assets/16-9.jpg'
import image1x1 from '../../assets/1-1.jpg'

export const FullFeatured = () => (
  <Card>
    <CardPrimaryAction>
      <CardMedia
        aspect="16-9"
        style={{
          backgroundImage: `url("${image16x9}")`,
        }}
      />
      <div style={{ padding: '1rem' }}>
        <Typography title>
          <h2>Our Changing Planet</h2>
        </Typography>
        <Typography subheading1>
          <h3>by Kurt Wagner</h3>
        </Typography>
      </div>
      <Typography body1>
        <div style={{ padding: '0 1rem 8px 1rem' }}>
          Visit ten places on our planet that are undergoing the biggest changes
          today.
        </div>
      </Typography>
    </CardPrimaryAction>
    <CardActions>
      <CardActionButtons>
        <Ripple>
          <Button>Read</Button>
        </Ripple>
        <Ripple>
          <Button>Bookmark</Button>
        </Ripple>
      </CardActionButtons>
      <CardActionIcons>
        <Ripple>
          <MaterialIcon>more_vert</MaterialIcon>
        </Ripple>
      </CardActionIcons>
    </CardActions>
  </Card>
)

export const Photo = () => (
  <Card>
    <CardPrimaryAction>
      <CardMedia
        aspect="square"
        style={{
          backgroundImage: `url("${image1x1}")`,
        }}
      >
        <CardMediaContent className="photo-card__media-content">
          <Typography subheading2>
            <div className="photo-card__media-title">Vacation Photos</div>
          </Typography>
        </CardMediaContent>
      </CardMedia>
    </CardPrimaryAction>
    <CardActions>
      <CardActionIcons>
        <IconButton
          icon={<MaterialIcon>favorite_border</MaterialIcon>}
          iconOn="favorite"
        />
        <IconButton icon={<MaterialIcon>bookmark_border</MaterialIcon>} />
        <MaterialIcon>share</MaterialIcon>
      </CardActionIcons>
    </CardActions>
  </Card>
)

export const Music = () => (
  <Card>
    <CardPrimaryAction>
      <div className="music-card__content">
        <CardMedia
          className="music-card__media"
          aspect="square"
          style={{
            backgroundImage: `url("${image1x1}")`,
          }}
        />
        <div className="music-card__info">
          <Typography headline>
            <div>Rozes</div>
          </Typography>
          <Typography body1>
            <div>Under the Grave</div>
          </Typography>
          <Typography body1>
            <div>(2016)</div>
          </Typography>
        </div>
      </div>
    </CardPrimaryAction>
    <ListGroupDivider />
    <CardActions>
      <CardActionButtons>
        <Button>Rate this album</Button>
      </CardActionButtons>
      <CardActionIcons>
        {Array.from({ length: 5 }, (_, i) => (
          <MaterialIcon key={i}>star_border</MaterialIcon>
        ))}
      </CardActionIcons>
    </CardActions>
  </Card>
)
