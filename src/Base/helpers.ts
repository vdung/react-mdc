import classnames from 'classnames'
import { StringMap, CssProps, PropOf } from './types'

export const propsOf = <T>(o: T) => Object.keys(o) as PropOf<T>[]

export const mapValue = <Value, R extends any>(
  mapper: (key: keyof R, result: R) => Value
) => (result: R, key: string): R => {
  result[key] = mapper(key, result)
  return result
}

export function buildClassList(
  props: StringMap<any>,
  propList: string[] | StringMap<any>
): StringMap<any> {
  if (Array.isArray(propList)) {
    return buildClassList(
      props,
      propList.reduce<StringMap<any>>(mapValue(prop => prop), {})
    )
  }

  return Object.entries(propList).reduce<StringMap<any>>(
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

export function cleanProps<P>(
  props: P,
  cssProps: CssProps<P>,
  keepCssProps: PropOf<P>[]
): Partial<P> {
  if (!Array.isArray(cssProps)) {
    return cleanProps(props, propsOf(cssProps), keepCssProps)
  }

  return propsOf(props)
    .filter(name => keepCssProps.includes(name) || !cssProps.includes(name))
    .reduce<Partial<P>>(mapValue(name => props[name]), {})
}

export function getClassName<P extends StringMap<any>>(
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
