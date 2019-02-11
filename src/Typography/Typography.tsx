import * as React from 'react'
import { materialize, withDefaultTag, CssProps } from '../Base'

export interface TypographyProps {
  headline1: boolean
  headline2: boolean
  headline3: boolean
  headline4: boolean
  headline5: boolean
  headline6: boolean
  subtitle1: boolean
  subtitle2: boolean
  body1: boolean
  body2: boolean
  caption: boolean
  button: boolean
  overline: boolean
}

const cssProps: CssProps<TypographyProps> = [
  'headline1',
  'headline2',
  'headline3',
  'headline4',
  'headline5',
  'headline6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption',
  'button',
  'overline',
]

const defaultTags: { [K in keyof TypographyProps]: React.ReactType } = {
  headline1: 'h1',
  headline2: 'h2',
  headline3: 'h3',
  headline4: 'h4',
  headline5: 'h5',
  headline6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
  button: 'span',
  overline: 'span',
}

const Typography: React.FunctionComponent<TypographyProps> = props => {
  for (const type of cssProps) {
    if (props[type]) {
      const { [type]: _, ...others } = props
      const Tag = defaultTags[type]

      return <Tag {...others} />
    }
  }

  return <div {...props} />
}

export default materialize<TypographyProps>('mdc-typography', {
  cssProps,
  keepCssProps: cssProps,
  displayName: 'Typography',
})(withDefaultTag(Typography))
