const path = require('path')
const { merge } = require('webpack-merge')
const webpack = require('webpack')
const config = require('./client-base.config')

module.exports = merge(config, {
  entry: ['webpack-hot-middleware/client', path.join(__dirname, '../src/index.tsx')],
  output: {
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/[name].chunk.js',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
})
