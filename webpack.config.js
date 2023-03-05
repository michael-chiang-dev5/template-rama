const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// this is used to minimize css
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// this is used to copy assets into the production build folder
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/client/index.tsx',
  module: {
    rules: [
      {
        test: /\.ts|tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  devtool: 'source-map', // this is required to generate source maps, which let you debug with un-minimifed files in the browser
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css', '.scss'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'our project', // Load a custom template (lodash by default)
      template: 'src/client/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    }),
    new CopyPlugin({
      patterns: [{ from: 'src/client/assets', to: 'assets' }],
    }),
  ],

  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    proxy: {
      '/api': 'http://localhost:8080',
      secure: false,
    },
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
};
