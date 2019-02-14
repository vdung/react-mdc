import * as React from 'react'
import { getClassName, cleanProps } from './helpers'
import { CssProps } from './types'

export interface MaterialProps<P> {
  tag: React.ReactType<P>
}

export interface MaterializeOptions<P> {
  cssProps?: CssProps<P>
  keepCssProps?: (keyof P)[]
  displayName?: string
}

export function materialize<P>(
  componentName: string,
  options: MaterializeOptions<P> = {}
) {
  const { cssProps = [], keepCssProps = [], displayName } = options

  return <C extends React.ReactType<any>>(Component: C) => {
    let componentDisplayName
    if (typeof Component !== 'string') {
      componentDisplayName = (Component as React.ComponentType).displayName
    }
    if (!componentDisplayName) {
      componentDisplayName = displayName
    }

    const MaterialComponent = React.forwardRef<
      C,
      P & React.ComponentPropsWithoutRef<C>
    >((props, ref) => {
      const baseClassName = componentName
      const className = getClassName<P>(baseClassName, props, cssProps)

      const componentProps = cleanProps(props, cssProps, keepCssProps)

      return React.createElement(Component, {
        ...componentProps,
        className,
        ref,
      })
    })

    MaterialComponent.displayName = componentDisplayName

    return MaterialComponent
  }
}
