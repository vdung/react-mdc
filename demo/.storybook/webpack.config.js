const path = require('path')

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  })
  config.resolve.extensions.push('.ts', '.tsx')
  config.module.rules.push({
    test: /\.(js|jsx)$/,
    include: [path.resolve(__dirname, '../src/components')],
    loader: require.resolve('@storybook/addon-storysource/loader'),
    options: {
      injectDecorator: false,
    },
    enforce: 'pre',
  })

  config.resolve.alias = {
    ...config.resolve.alias,
    '@vdung/react-mdc': path.resolve('../'),
  }

  return config
}
