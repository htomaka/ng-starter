'use strict';
var webpack = require('webpack');
var path = require('path');
var port = 3000;

console.log(process.argv);
module.exports = {
  entry: {
    app: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:' + port,
      './app/'
    ],
    vendors: ['angular']
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
        loader: 'ng-annotate!babel?presets[]=es2015',
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
  devServer: {
    // in case of CORS issues
    proxy: {
      '/api/*': {
        target: {
          host: 'localhost',
          port: 8080
        },
        secure: false
      }
    },
    port: port
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ]
};
