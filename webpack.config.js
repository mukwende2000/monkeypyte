const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    open: true,
    port: 3000,
    hot: true,
    compress: true,
  },
  module: {
    rules:
      [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'monkeypyte | home',
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
};
