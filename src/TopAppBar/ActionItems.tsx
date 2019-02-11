import * as React from 'react'
import Section, { SectionProps } from './Section'
import { materialize, ClassNameForwardingComponent } from '../Base'

const ActionItem = materialize('mdc-top-app-bar__action-item')(
  ClassNameForwardingComponent
)

type ChildType = React.ReactElement<React.HTMLProps<HTMLElement>>

export interface ActionButtonsProps
  extends React.ComponentPropsWithoutRef<typeof Section> {
  className?: string
  children?: ChildType | ChildType[]
}

const ActionButtons: React.FunctionComponent<ActionButtonsProps> = ({
  children,
  ...props
}) => (
  <Section {...props} role="toolbar" alignEnd>
    {children
      ? React.Children.map<React.ReactElement<typeof ActionItem>, ChildType>(
          children,
          child => <ActionItem>{child}</ActionItem>
        )
      : null}
  </Section>
)

export default materialize('mdc-card__action-buttons', {
  displayName: 'TopAppBarActionButtons',
})(ActionButtons)
