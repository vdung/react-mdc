import * as React from 'react'
import classnames from 'classnames'

export type CssPropFunction<P> = (props: P) => string | boolean | undefined
export type CssProps<P> =
  | (keyof P)[]
  | { [K in keyof P]?: string | (CssPropFunction<P>) }

export type PropMap<T> = { [key: string]: T }
export type PropList<T> = string[] | PropMap<T>

const mapValue = <Value, R extends PropMap<Value>>(
  mapper: (key: keyof R, result: R) => Value
) => (result: R, key: string): R => {
  result[key] = mapper(key, result)
  return result
}

export function buildClassList(
  props: PropMap<any>,
  propList: PropList<any>
): PropMap<any> {
  if (Array.isArray(propList)) {
    return buildClassList(
      props,
      propList.reduce<PropMap<any>>(mapValue(prop => prop), {})
    )
  }

  return Object.entries(propList).reduce<PropMap<any>>(
    (result, [prop, className]) => {
      if (className instanceof Function) {
        const value = className(props)

        if (typeof value === 'string') {
          result[value] = true
        } else {
          result[prop] = value
        }
      } else {
        result[className] = props[prop]
      }

      return result
    },
    {}
  )
}

export function cleanProps<P extends PropMap<any>>(
  props: P,
  cssProps: PropList<any>,
  keepCssProps: (keyof P)[]
): { [K in keyof P]?: any } {
  if (!Array.isArray(cssProps)) {
    return cleanProps(props, Object.keys(cssProps), keepCssProps)
  }

  return Object.keys(props)
    .filter(name => keepCssProps.includes(name) || !cssProps.includes(name))
    .reduce(mapValue(name => props[name]), {})
}

export function getClassName<P extends PropMap<any>>(
  baseClassName: string,
  props: P,
  cssProps: CssProps<P> = []
): string {
  const { className, ...otherProps } = props
  const classList = buildClassList(otherProps, cssProps)

  return classnames(
    baseClassName,
    className,
    Object.entries(classList).map(([prop, value]) => ({
      [`${baseClassName}--${prop}`]: value,
    }))
  )
}

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

function propToSetter(name: string): string {
  return 'set' + name[0].toUpperCase() + name.substr(1)
}

export type EventHandler<E = CustomEvent> = (event: E) => void

export function withControl<P, S = {}, SS = any>(
  MDCClass: any,
  options: {
    events?: { [name: string]: keyof P }
    controlProps?: (keyof P)[]
  } = {}
) {
  const { events = {}, controlProps = [] } = options

  return class WithControl extends React.Component<P, S, SS> {
    public MDComponent?: any
    public control: React.RefObject<any> = React.createRef()
    /* private */ eventHandlers: { [name: string]: Function } = {}

    /* protected */ attachHandlers() {
      for (const name in events) {
        const prop = events[name]
        this.eventHandlers[name] = (event: CustomEvent) => {
          const propValue = this.props[prop]
          if (propValue instanceof Function) {
            propValue(event)
          }
        }

        this.MDComponent.listen(name, this.eventHandlers[name])
      }

      for (const prop of controlProps) {
        if (this.props[prop] !== undefined) {
          this.setControlProp(prop, this.props[prop])
        }
      }
    }

    /* protected */ detachHandlers() {
      for (const name in this.eventHandlers) {
        this.MDComponent.unlisten(name, this.eventHandlers[name])
      }
    }

    /* protected */ cleanProps(
      keepProps?: (keyof P)[]
    ): { [K in keyof P]?: P[K] } {
      if (!Array.isArray(keepProps)) {
        keepProps = []
      }

      return cleanProps(
        this.props,
        controlProps.concat(Object.values(events)),
        keepProps
      )
    }

    /* protected */ setControlProp(name: any, value: any) {
      if (!this.MDComponent) {
        return
      }

      if (name in this.MDComponent) {
        this.MDComponent[name] = value
      } else {
        const setterName = propToSetter(name)

        if (setterName in this.MDComponent) {
          const setter = this.MDComponent[setterName]

          if (setter instanceof Function) {
            if (Array.isArray(value)) {
              setter.apply(this.MDComponent, value)
            } else {
              setter.call(this.MDComponent, value)
            }
          }
        }
      }
    }

    componentDidMount() {
      if (this.control.current) {
        this.MDComponent = new MDCClass(this.control.current)
        this.attachHandlers()
      }
    }

    componentWillUnmount() {
      if (this.MDComponent) {
        this.detachHandlers()
        this.MDComponent.destroy()
      }
    }

    componentWillReceiveProps(nextProps: P) {
      if (this.MDComponent) {
        for (const prop of controlProps) {
          if (
            nextProps[prop] !== undefined &&
            this.props[prop] !== nextProps[prop]
          ) {
            this.setControlProp(prop, nextProps[prop])
          }
        }
      }
    }
  }
}

export interface ComponentWithTagProps {
  tag?: React.ReactType
}
export function withDefaultTag<T extends React.ReactType>(defaultTag: T) {
  const Component = React.forwardRef<
    T,
    ComponentWithTagProps & React.ComponentPropsWithoutRef<T>
  >(({ tag: Tag = defaultTag, ...props }, ref) => {
    return <Tag {...props} ref={ref} />
  })

  return Component
}
