import * as React from 'react'
import classnames from 'classnames'

export interface ClassNameForwardingComponentProps {
  className?: string
  children: React.ReactElement<any>
}

export const ClassNameForwardingComponent = React.forwardRef<
  any,
  ClassNameForwardingComponentProps
>((props, ref) => {
  const { children, className, ...otherProps } = props

  return React.cloneElement(children, {
    ...otherProps,
    ref,
    className: classnames(className, children.props.className),
  })
})
