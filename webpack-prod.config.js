// prod stands for Production

const common = require('./webpack.config');

module.exports = {
  ...common, // spread operator for all object properties
  mode: 'production',
  performance: {
    hints: 'error'
  },
}