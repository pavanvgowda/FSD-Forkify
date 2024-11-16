const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    hot: true, // Enable Hot Module Replacement
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Enable HMR globally
  ],
};
