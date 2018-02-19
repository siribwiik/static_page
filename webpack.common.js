const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/entry.jsx",

  output: {
    filename: "ba.js",
    path: __dirname + "/build",
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['build']),

  ]
};