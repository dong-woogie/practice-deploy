const ExtractCSSChunks = require('mini-css-extract-plugin')
const LoadablePlugin = require('@loadable/webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = (target) => ({
  mode: 'development',
  devtool: 'source-map',
  target,
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.mjs', '.css', '.ts', '.tsx'],
  },
  module: {
    rules: [
      // script
      {
        oneOf: [
          {
            test: /\.mjs$/,
            include: /node_modules/,
            type: 'javascript/auto',
          },
          {
            test: /\.(js|jsx|mjs|ts|tsx)$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  caller: target,
                  cacheDirectory: false,
                },
              },
            ],
          },
        ],
      },
    ],
  },

  plugins: [
    new LoadablePlugin({ filename: 'stats.json', writeToDisk: true }),
    new ExtractCSSChunks(),
    new CleanWebpackPlugin(),
  ],
})

module.exports = config
