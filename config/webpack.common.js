const HtmlWebpackTemplate = require('html-webpack-template');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBarPlugin = require('webpackbar');
const merge = require('webpack-merge');
const path = require('path');
const parts = require('./webpack.parts');
const dirs = require('./dirs');

require('dotenv').config();

module.exports = merge([
  {
    context: dirs.ROOT,
    entry: {
      app: path.resolve(dirs.SRC, 'index.tsx'),
    },
    plugins: [
      new WebpackBarPlugin(),
      new HtmlWebpackPlugin({
        inject: false,
        template: HtmlWebpackTemplate,
        title: 'React Webpack template',
        filename: 'index.html',
        appMountId: 'root',
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
  },
  parts.loadJS({
    include: dirs.SRC,
    exclude: dirs.NODE_MODULES,
  }),
  parts.loadFonts(),
  parts.globals({
    PRODUCTION: JSON.stringify(!!process.env.PRODUCTION),
  }),
]);
