import path from 'path'
import { storiesOf, configure } from '@storybook/react'
import requireContext from 'require-context.macro'

import '../index.css'

const req = requireContext('../src/components', true, /\.js$/)

function loadStories() {
  req.keys().forEach(mod => {
    const { __STORY__, __ADDS_MAP__, withStorySource, ...stories } = req(mod)

    const storybook = storiesOf(path.dirname(mod).substr(2), module)
    if (withStorySource) {
      storybook.addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
    }

    Object.entries(stories).reduce(
      (story, [name, element]) => story.add(name, element),
      storybook
    )
  })
}

configure(loadStories, module)
