const CopyWebpackPlugin = require("copy-webpack-plugin");
var UglifyJsPlugin = require('uglify-js-plugin');

module.exports = {
  context: __dirname + "/",
  entry: "./src/entry.jsx",

  output: {
    filename: "app.js",
    path: __dirname + "/build",
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    inline: true,
    port : 3005
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },

  plugins : [
    new CopyWebpackPlugin([
      {from: "index.html", to:"index.html"},
      {from: "lib", to: "lib/"}
    ]),
  ]
};
