const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const Autoprefixer = require('autoprefixer');
const CssNano = require('cssnano');

exports.devServer = ({
  host,
  port,
  contentBase,
  errors,
} = {}) => ({
  devServer: {
    contentBase,
    host,
    port,
    quiet: !errors,
    stats: 'errors-only',
    overlay: true,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});

exports.loadCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include,
        exclude,
      },
    ],
  },
});

exports.extractCSS = ({ include, exclude, use } = {}) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
        ].concat(use),
        include,
        exclude,
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[name].[contenthash].css',
    }),
  ],
});

exports.postCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => ([
                Autoprefixer(),
                CssNano(),
              ]),
            },
          },
        ],
        include,
        exclude,
      },
    ],
  },
});

exports.loadJS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
          {
            loader: 'eslint-loader',
          },
        ],
        include,
        exclude,
      },
    ],
  },
});

exports.loadImages = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './img/[name].[hash].[ext]',
            },
          },
        ],
        include,
        exclude,
      },
    ],
  },
});

exports.minifyImages = () => ({
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: ['image-webpack-loader'],
      },
    ],
  },
});

exports.loadFonts = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './font/[name].[hash].[ext]',
            },
          },
        ],
        include,
        exclude,
      },
    ],
  },
});

exports.bundleMap = options => ({
  plugins: [
    new BundleAnalyzerPlugin(options),
  ],
});

exports.globals = globals => ({
  plugins: [
    new webpack.DefinePlugin(globals),
  ],
});
