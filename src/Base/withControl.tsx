import * as React from 'react'
import { cleanProps, propsOf } from './helpers'
import { PropOf } from './types'

type EventMap<P> = { [K in PropOf<P>]?: string }

function propToSetter(prop: string): string {
  return `set${prop[0].toUpperCase()}${prop.substr(1)}`
}

export type EventHandler<E = CustomEvent> = (event: E) => void
export interface ControlOptions<P> {
  events?: EventMap<P>
  controlProps?: PropOf<P>[]
}

export function withControl<P, S = {}, SS = any>(
  MDCClass: any,
  options: ControlOptions<P> = {}
) {
  const { controlProps = [] } = options
  const events: EventMap<P> = options.events || {}

  return class WithControl extends React.Component<P, S, SS> {
    public MDComponent?: any
    public control: React.RefObject<any> = React.createRef()
    /* private */ eventHandlers: { [name: string]: Function } = {}

    /* protected */ attachHandlers() {
      for (const prop of propsOf(events)) {
        const name = events[prop]
        this.eventHandlers[prop] = (event: CustomEvent) => {
          const handler = this.props[prop]
          if (handler instanceof Function) {
            handler(event)
          }
        }

        this.MDComponent.listen(name, this.eventHandlers[prop])
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

    /* protected */ cleanProps(keepProps?: PropOf<P>[]): Partial<P> {
      if (!Array.isArray(keepProps)) {
        keepProps = []
      }

      return cleanProps(
        this.props,
        controlProps.concat(propsOf(events)),
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

    componentDidUpdate(prevProps: P) {
      if (this.MDComponent) {
        for (const prop of controlProps) {
          if (
            this.props[prop] !== undefined &&
            this.props[prop] !== prevProps[prop]
          ) {
            this.setControlProp(prop, this.props[prop])
          }
        }
      }
    }
  }
}
