// 引用动态链接库

const { resolve } = require("path");
const { DllReferencePlugin } = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')

module.exports = {
  entry: './index.js',
  plugins: [
    // 声明会使用到动态链接库
    // 这里的 manifest 只有一个 jQuery
    // 如果需要同时链接多个库
    // 1. 将 jquery 和 lodash 打包成一个 dll，并引用这个 manifest
    // 2. 将 jquery 和 lodash 打包成独立的 2 个 dll，并合并这两个清单以供引用
    new DllReferencePlugin({
      manifest: resolve(__dirname, 'dll/manifest.json')
    }),
    new HtmlWebpackPlugin(),
    // 添加依赖引用至 HTML 中的 script 标签
    // 目前还不兼容 webpack@5
    // new AddAssetHtmlWebpackPlugin({
    //   filepath: resolve(__dirname, 'dll/jquery.js')
    // })
  ],
  mode: 'production'
}
