const webpack = require('webpack');
const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

var config = {
  entry: SRC_DIR + '/app/app.js',
  devServer: {
    port: 4000,
    host: '0.0.0.0'
  },
  devtool: 'eval',
  output: {
    path: DIST_DIR + '/app',
    filename: 'bundle.js',
    publicPath: '/app/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        },
        exclude: [nodeModulesPath],
      },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
    ]
  }
};

module.exports = config;
