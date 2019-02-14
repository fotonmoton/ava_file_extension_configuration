const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const common = require('./webpack.common');
const parts = require('./webpack.parts');
const dirs = require('./dirs');

const prod = merge([
  {
    mode: 'production',
    output: {
      filename: './js/[name].bundle.[contenthash].js',
      path: dirs.DIST,
    },
    plugins: [
      new WebpackNotifierPlugin(),
      new webpack.HashedModuleIdsPlugin(),
      new CleanWebpackPlugin([dirs.DIST], {
        root: dirs.ROOT,
      }),
      new ForkTsCheckerWebpackPlugin({
        async: false,
      }),
    ],
    devtool: 'source-map',
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'initial',
      },
    },
  },
  parts.loadImages(),
  parts.minifyImages(),
  parts.extractCSS({
    use: ['css-loader'],
  }),
  parts.postCSS(),
  parts.bundleMap({
    analyzerMode: process.env.ANALYZER || 'disabled',
  }),
]);

module.exports = merge(common, prod);
