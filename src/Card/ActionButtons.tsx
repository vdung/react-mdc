import * as React from 'react'
import Action from './Action'
import { materialize } from '../Base'

type ChildType = React.ReactElement<React.HTMLProps<HTMLElement>>

export interface ActionButtonsProps extends React.HTMLProps<HTMLDivElement> {
  className?: string
  children?: ChildType | ChildType[]
}

const ActionButtons: React.FunctionComponent<ActionButtonsProps> = ({
  children,
  ...props
}) => (
  <div {...props}>
    {children
      ? React.Children.map<React.ReactElement<typeof Action>, ChildType>(
          children,
          child => <Action button>{child}</Action>
        )
      : null}
  </div>
)

export default materialize('mdc-card__action-buttons', {
  displayName: 'CardActionButtons',
})(ActionButtons)
