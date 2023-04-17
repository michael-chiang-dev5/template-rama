const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './client/index.html'),
      filename: 'index.html',
    }),
  ],
  entry: '/client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  // configuration options for webpack-dev-server, which provides hot reloading
  // Here, devServer is on port 3000
  //   api calls are proxied to backend on port 8080
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    proxy: {
      '/api': 'http://localhost:8080',
      '/auth': 'http://localhost:8080',
      secure: false,
    },
    // historyApiFallback for refresh on react router route
    // https://ui.dev/react-router-cannot-get-url-refresh
    // devServer only serves on :3000/. When you access a route localhost:3000/my/route, dev server
    //   normally does not know how to resolve. historyApiFallback makes it so that dev server serves
    //   bundle, then redirects to /my/route
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        exclude: /(node_modules)/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ['file-loader'],
      },
    ],
  },
};
