import * as React from 'react'

export type PropOf<P> = Extract<keyof P, string>

export type CssPropFunction<P> = (props: P) => string | boolean | undefined
export type CssProps<P> =
  | PropOf<P>[]
  | { [K in PropOf<P>]?: string | (CssPropFunction<P>) }

export interface StringMap<T> {
  [key: string]: T
}
export type ForwardRefType<T> = T extends React.ForwardRefExoticComponent<
  React.RefAttributes<infer U>
>
  ? U
  : T
