const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCSSExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCSSExtractPlugin()
  ],
  mode: 'production'
}
