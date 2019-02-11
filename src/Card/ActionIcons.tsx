import * as React from 'react'
import Action from './Action'
import { materialize } from '../Base'

type ChildType = React.ReactElement<React.HTMLProps<HTMLElement>>

export interface ActionIconsProps extends React.HTMLProps<HTMLDivElement> {
  className?: string
  children?: ChildType | ChildType[]
}

const ActionIcons: React.FunctionComponent<ActionIconsProps> = ({
  children,
  ...props
}) => (
  <div {...props}>
    {children
      ? React.Children.map<React.ReactElement<typeof Action>, ChildType>(
          children,
          child => <Action icon>{child}</Action>
        )
      : null}
  </div>
)

export default materialize('mdc-card__action-icons', {
  displayName: 'CardActionIcons',
})(ActionIcons)
