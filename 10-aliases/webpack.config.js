const { resolve } = require('path')

module.exports = {
  entry: '.',
  mode: 'production',
  resolve: {
    alias: {
      $app: resolve(__dirname, 'app')
    },
    extensions: ['.js']
  }
}
