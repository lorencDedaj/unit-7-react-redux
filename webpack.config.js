// const webpack = require('webpack');
const path = require('path');

const entry = [
  './client/index.js'
];

const output = {
  path: path.resolve(__dirname, 'dist'),
  publicPath: '/dist/',
  filename: 'bundle.js',
};

module.exports = {
  mode: 'development',
  entry,
  output,
  devtool: "eval-source-map",
  module: {
    rules:[
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
        }
      }
    ]
  },
};    
          