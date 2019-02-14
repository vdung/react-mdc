import path from 'path'
import { storiesOf, configure } from '@storybook/react'
import requireContext from 'require-context.macro'

import '../index.css'

const req = requireContext('../src/components', true, /\.js$/)

function loadStories() {
  req.keys().forEach(filename => {
    const { __STORY__, __ADDS_MAP__, withStorySource, ...stories } = req(
      filename
    )

    const storybook = storiesOf(path.normalize(path.dirname(filename)), module)
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
