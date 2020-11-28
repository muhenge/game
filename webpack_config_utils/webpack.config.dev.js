/* eslint import/no-unresolved: [2, { commonjs: true, amd: true }] */
const HtmlPlugin = require('html-webpack-plugin');
const appPath = require('./common.path');

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: appPath.OUTPUT,
    compress: true,
    port: 3000,
    watchContentBase: true,
    // hot: true,
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      },
    ],
  },

  plugins: [
    new HtmlPlugin({
      title: 'Game Leader Board',
      template: `${appPath.ENTRY_SRC}/template.html`,
    }),
  ],
};
