import * as React from 'react'
import Section from './Section'
import NavigationIcon from './NavigationIcon'
import Title from './Title'

export interface NavigationProps
  extends React.ComponentPropsWithoutRef<typeof Section> {
  title?: string
  icon?: React.ReactElement<any>
}

const Navigation: React.FunctionComponent<NavigationProps> = ({
  title,
  icon,
  ...props
}) => (
  <Section {...props} alignStart>
    {icon ? <NavigationIcon>{icon}</NavigationIcon> : null}
    <Title>{title}</Title>
  </Section>
)
Navigation.displayName = 'TopAppBarNavigation'

export default Navigation
