// @babel/preset-env · Babel
// https://babeljs.io/docs/en/babel-preset-env#usebuiltins

// yarn add core-js@3

module.exports = {
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  mode: 'production'
}
