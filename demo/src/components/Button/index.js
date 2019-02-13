import React from 'react'
import { Button, ButtonIcon } from '@vdung/react-mdc'
import './Button.css'

export const Raised = () => (
  <div className="btn-container">
    <Button raised>Baseline</Button>
    <Button raised dense>
      Dense
    </Button>
    <Button raised className="secondary-btn">
      Secondary
    </Button>
    <Button raised>
      <ButtonIcon>favorite</ButtonIcon>
      Icon
    </Button>
  </div>
)

export const Text = () => (
  <div className="btn-container">
    <Button>Baseline</Button>
    <Button dense>Dense</Button>
    <Button className="secondary-btn">Secondary</Button>
    <Button>
      <ButtonIcon>favorite</ButtonIcon>
      Icon
    </Button>
  </div>
)
