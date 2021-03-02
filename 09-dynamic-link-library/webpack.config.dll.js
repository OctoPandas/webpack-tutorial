const webpack = require('webpack')
const { resolve } = require('path')

// 生成动态链接库
// npx webpack --config webpack.config.dll.js

module.exports = {
  entry: {
    jquery: 'jquery' // 直接从 jQuery 作为入口
  },
  output: {
    path: resolve(__dirname, 'dll'),
    filename: '[name].js',
    library: '[name][fullhash:8]' // 暴露出的全局名称
  },
  plugins: [
    // 创建 `manifest.json` 清单：指定全局名称
    new webpack.DllPlugin({
      name: '[name][fullhash:8]',
      path: resolve(__dirname, 'dll/manifest.json')
    })
  ],
  mode: 'production'
}
