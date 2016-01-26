module.exports = function(config) {
  'use strict';
  config.set({
    // base path used to resolve all patterns
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files/patterns to load in the browser
    files: [{pattern: 'spec.bundle.js', watched: false}],

    // files to exclude
    exclude: [],

    plugins: [
      require('karma-jasmine'),
      require('karma-junit-reporter'),
      require('karma-sourcemap-loader'),
      require('karma-webpack'),
      require('karma-phantomjs-launcher')
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {'spec.bundle.js': ['webpack', 'sourcemap']},

    webpack: {
      devtool: 'inline-source-map',
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
      }
    },

    webpackServer: {
      noInfo: true // prevent console spamming when running in Karma!
    },

    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'junit'],
    junitReporter: {
      outputFile: 'test-results.xml'
    },

    // web server port
    port: 9876,

    // enable colors in the output
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // toggle whether to watch files and rerun tests upon incurring changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // if true, Karma runs tests once and exits
    singleRun: true
  });
};
