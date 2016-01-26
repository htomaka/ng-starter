'use strict';
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      './app/app.js'
    ]
  },
  output: {
    path: './build/',
    filename: 'bundle.js'
  },
  devtool: 'sourcemap',
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.js$/,
        loader: 'babel?presets[]=es2015',
        exclude: /node_modules|bower_components/
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules|bower_components/
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
        loader: 'file-loader?name=res/[name].[ext]?[hash]'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file'
      },
      {
        test: /\.jade$/,
        loader: 'jade-loader'
      },
      {
        test: /.html$/,
        loader: 'file-loader?name=[path][name].html&context=./app'
      },
      {
        test: /\.json/,
        loader: 'json'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      MODE: {
        production: process.env.NODE_ENV === 'production'
      }
    })
  ]
};
