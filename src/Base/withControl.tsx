import * as React from 'react'
import { cleanProps } from './helpers'

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
