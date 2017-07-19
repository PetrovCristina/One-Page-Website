// @flow

import path from 'path'
import webpack from 'webpack'

import { WDS_PORT } from './src/shared/config'
import { isProd } from './src/shared/util'

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractLess = new ExtractTextPlugin({
  filename: 'style.css',
  disable: process.env.NODE_ENV === 'development',
})

export default {

  entry: [
    'react-hot-loader/patch',
    './src/client',
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '.'),
    publicPath: isProd ? '/static/' : `http://localhost:${WDS_PORT}/`,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
        }],
      },
      {
        test: /\.less$/,
        use: extractLess.extract({
          use: [{
            loader: 'css-loader',
            options: {
              url: false,
            },
          }, {
            loader: 'less-loader',
          }],
          fallback: 'style-loader',
        }),
      },
    ],
  },

  devtool: isProd ? false : 'source-map',
  resolve: {
    extensions: ['.less', '.js', '.jsx'],
  },
  devServer: {
    port: WDS_PORT,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    isProd ? extractLess : new ExtractTextPlugin('styles.css'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],

}
