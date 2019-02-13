import path from 'path'
import { storiesOf, configure } from '@storybook/react'
import '../index.css'

const req = require.context(
  '!!babel-loader!@storybook/addon-storysource/loader?injectDecorator=false!../src/components',
  true,
  /\.js$/
)

function loadStories() {
  req.keys().forEach(filename => {
    const { __STORY__, __ADDS_MAP__, withStorySource, ...stories } = req(
      filename
    )

    Object.entries(stories).reduce(
      (story, [name, element]) => story.add(name, element),
      storiesOf(path.normalize(path.dirname(filename)), module).addDecorator(
        withStorySource(__STORY__, __ADDS_MAP__)
      )
    )
  })
}

configure(loadStories, module)
