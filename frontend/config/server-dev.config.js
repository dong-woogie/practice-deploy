const { merge } = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')
const config = require('./server-base.config')

module.exports = merge(config, {
  entry: [path.join(__dirname, '../src/server/serverBootstrap.js')],
  output: {
    path: path.join(__dirname, '../dist/server-dev'),
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
})
