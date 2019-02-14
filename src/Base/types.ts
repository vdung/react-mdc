export type CssPropFunction<P> = (props: P) => string | boolean | undefined
export type CssProps<P> =
  | (keyof P)[]
  | { [K in keyof P]?: string | (CssPropFunction<P>) }

export type PropMap<T> = { [key: string]: T }
export type PropList<T> = string[] | PropMap<T>
