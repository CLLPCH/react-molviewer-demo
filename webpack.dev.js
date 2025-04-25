const path = require('path');
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
    clean: true,
    libraryTarget: 'umd',
    globalObject: 'this', // Define the global object to 'this'
  },
  optimization: { minimize: true, minimizer: [new TerserPlugin()] },
  resolve: { extensions: ['.js', '.jsx'] },
  module: {
    rules: [
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource' },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
      },
      {
        test: /\.(scss|css)$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          'postcss-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [new Dotenv()],
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
    historyApiFallback: true,
    static: { directory: path.join(__dirname, 'public/') },
    port: 8080,
    devMiddleware: { publicPath: 'http://localhost:3000/' },
    open: true,
    hot: 'only',
    proxy: [
      {
        context: ['/api/chemotion'],
        target: 'https://www.chemotion-repository.net',
        changeOrigin: true,
        pathRewrite: { '^/api/chemotion': '/api/v1/public' },
        secure: false,
      },
    ],
  },
};
