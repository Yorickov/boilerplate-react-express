const path = require('path');
const webpack = require('webpack');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: ['./client'],
  output: {
    path: path.join(__dirname, 'public', 'assets'),
    filename: 'main.js',
    publicPath: '/assets/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(scss)$/,
        use: ['style-loader', 'css-loader',
          {
            loader: 'postcss-loader',
            options: { plugins: () => [precss, autoprefixer] },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
    }),
  ],
};
