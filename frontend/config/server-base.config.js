const { merge } = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const commonConfig = require('./common.config')

module.exports = merge(commonConfig('node'), {
  name: 'server',
  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.module\.(css)$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    auto: true,
                    exportOnlyLocals: true,
                  },
                },
              },
            ],
          },
        ],
      },
    ],
  },

  externals: ['@loadable/component', nodeExternals()],
  plugins: [new CleanWebpackPlugin()],
})
