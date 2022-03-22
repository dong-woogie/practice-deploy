const path = require('path/posix')
const { merge } = require('webpack-merge')
const config = require('./server-base.config')

module.exports = merge(config, {
  mode: 'production',
  entry: [path.join(__dirname, '../src/index.server.ts')],
  output: {
    path: path.join(__dirname, '../dist/server'),
  },
  optimization: {
    minimize: true,
  },
})
