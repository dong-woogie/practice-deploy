const path = require('path')
const { merge } = require('webpack-merge')
const config = require('./client-base.config')

module.exports = merge(config, {
  entry: path.join(__dirname, '../src/index.tsx'),
  mode: 'production',
  output: {
    filename: 'static/js/[name].[contenthash:8].js',
    chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
  },
  optimization: {
    minimize: true,
  },
})
