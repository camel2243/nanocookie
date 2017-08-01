/* global __dirname */
const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    'nanocookie': './src/nanocookie.js'
  },
  output: {
    filename: "./dist/[name].min.js",
    libraryTarget: "umd",
    library: "nanocookie"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["babel-loader"],
        include: path.resolve(__dirname, "./src")
      }
    ]
  },
};
