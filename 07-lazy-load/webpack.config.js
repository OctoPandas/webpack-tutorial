const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './index.js',
  plugins: [
    new HtmlPlugin()
  ],
  mode: 'production'
}
