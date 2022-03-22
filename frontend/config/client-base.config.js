const path = require('path')
const { merge } = require('webpack-merge')
const ExtractCSSChunks = require('mini-css-extract-plugin')
const commonConfig = require('./common.config')

const config = merge(commonConfig('web'), {
  name: 'client',
  output: {
    path: path.join(__dirname, '../dist/client'),
    publicPath: '/',
  },
  module: {
    rules: [
      // styles
      {
        oneOf: [
          {
            test: /\.module\.(css)$/,
            exclude: /node_modules/,
            use: [
              ExtractCSSChunks.loader,
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                },
              },
            ],
          },
        ],
      },
    ],
  },
})

module.exports = config
