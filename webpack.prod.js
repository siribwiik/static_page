const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const common = require('./webpack.common.js');

module.exports = merge(common, {
  plugins: [
    new UglifyJSPlugin(),
    new CopyWebpackPlugin([
      {from: "index.html", to:"index.html"},
      {from: "lib", to: "lib/"}
    ]),
  ]
});