import classnames from 'classnames'
import { PropMap, PropList, CssProps } from './types'

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
