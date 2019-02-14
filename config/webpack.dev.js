const merge = require('webpack-merge');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const dirs = require('./dirs');
const parts = require('./webpack.parts');
const common = require('./webpack.common');

const dev = merge([
  {
    mode: 'development',
    devtool: 'eval-source-map',
    plugins: [
      new ErrorOverlayPlugin(),
      new FriendlyErrorsWebpackPlugin(),
    ],
  },
  parts.devServer({
    contentBase: dirs.DIST,
    host: process.env.HOST,
    port: process.env.PORT,
    errors: process.env.DEV_ERRORS,
  }),
  parts.loadImages(),
  parts.loadCSS(),
]);

module.exports = merge(common, dev);
