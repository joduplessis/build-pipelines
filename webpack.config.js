var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app.js',
  output: {
    path: './dist',
    filename: "bundle.min.js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({sourceMap: false, mangle: false}),
    new ExtractTextPlugin('./styles.css')
  ]
};
