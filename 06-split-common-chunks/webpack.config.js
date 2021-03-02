module.exports = {
  entry: {
    main: './index.js',
    ad: './ad.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  mode: 'production'
}
