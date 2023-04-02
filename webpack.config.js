const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  devtool: 'inline-source-map',
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
    new HtmlWebpackPlugin({
      title: 'monkeypyte | About Us',
      template: './src/about.html',
      filename: 'about.html',
    }),
    new HtmlWebpackPlugin({
      title: 'monkeypyte | Settings',
      template: './src/routes/settings.html',
      filename: 'settings.html',
    }),
    new HtmlWebpackPlugin({
      title: 'monkeypyte | Authentication',
      template: './src/routes/login.html',
      filename: 'login.html',
    }),
    new HtmlWebpackPlugin({
      title: 'monkeypyte | home',
      template: './src/home.html',
      filename: 'home.html',
    }),
  ],
};
