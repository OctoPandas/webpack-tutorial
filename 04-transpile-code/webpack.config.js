// yarn add -D babel-loader @babel/core @babel/preset-env

// Babel · The compiler for next generation JavaScript
// https://babeljs.io/setup#installation

module.exports = {
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  mode: 'production'
}
