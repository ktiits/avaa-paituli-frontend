const merge = require('webpack-merge')
const Dotenv = require('dotenv-webpack');
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'inline-source-map',
  plugins: [
    new Dotenv({
      path: './.env.production',
    }),
  ],
})
