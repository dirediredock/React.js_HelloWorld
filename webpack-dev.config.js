// dev stands for Development

const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin'); // npm install! I remember that referece

const common = require('./webpack.config'); // my own file here

module.exports = {
  ...common, // spread common
  mode: 'development',
  module: {
  // this completely over-writes whats brought in from the "..." spread
    rules: [
      {
        ...common.module.rules[0],
        options: {
          plugins: [require.resolve('react-refresh/babel')]
        }
      }
    ]
  },

  plugins: [
    ...common.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],

  devServer: {
    open: 'Google Chrome',
    hot: true,
  },

  performance: {
    hints: 'warning'
  },
}