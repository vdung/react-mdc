export type PropOf<P> = Extract<keyof P, string>

export type CssPropFunction<P> = (props: P) => string | boolean | undefined
export type CssProps<P> =
  | PropOf<P>[]
  | { [K in PropOf<P>]?: string | (CssPropFunction<P>) }

export type StringMap<T> = { [key: string]: T }
