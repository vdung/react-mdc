import * as React from 'react'

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
