import * as React from 'react'
import { materialize, ClassNameForwardingComponent } from '../Base'

const Normal = materialize('mdc-top-app-bar--fixed-adjust')(
  ClassNameForwardingComponent
)
const Prominent = materialize('mdc-top-app-bar--prominent-fixed-adjust')(
  ClassNameForwardingComponent
)
const Dense = materialize('mdc-top-app-bar--dense-fixed-adjust')(
  ClassNameForwardingComponent
)
const DenseProminent = materialize(
  'mdc-top-app-bar--dense-prominent-fixed-adjust'
)(ClassNameForwardingComponent)
const Short = materialize('mdc-top-app-bar--short-fixed-adjust')(
  ClassNameForwardingComponent
)

export interface FixedAdjustProps {
  prominent?: boolean
  dense?: boolean
  short?: boolean
  children: React.ReactElement<any>
}

class FixedAdjust extends React.Component<FixedAdjustProps> {
  public static displayName = 'TopAppBarFixedAdjust'

  render() {
    const { prominent, dense, short, children } = this.props

    if (dense && prominent) {
      return <DenseProminent>{children}</DenseProminent>
    }
    if (dense) {
      return <Dense>{children}</Dense>
    }
    if (prominent) {
      return <Prominent>{children}</Prominent>
    }
    if (short) {
      return <Short>{children}</Short>
    }
    return <Normal>{children}</Normal>
  }
}

export default FixedAdjust
