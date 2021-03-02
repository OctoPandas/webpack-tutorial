const ESLintPlugin = require('eslint-webpack-plugin')

// webpack-contrib/eslint-webpack-plugin: A ESLint plugin for webpack
// https://github.com/webpack-contrib/eslint-webpack-plugin

module.exports = {
  entry: './index.js',
  plugins: [
    new ESLintPlugin()
  ],
  mode: 'development'
}
