const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');


// 没有babel转换不能export default
module.exports = {
  mode: 'production',
  //单个入口
  // entry: './src/index.js',
  // 多个入口
  entry: {
    main: './src/index.js',
    about: './src/about.js'
  },
  output: {
    // path: path.resolve(process.cwd(), './dist'),
    // path: __dirname + '/dest',
    filename: 'js/[name].[chunkHash:8].js'
  },
  module: {
    rules: [{
      test: /\.css$/i,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            esModule: true
          }
        },
        'css-loader',
        'postcss-loader',
      ],
    },
    {
      test: /\.less$/i,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            esModule: true
          }
        },
        'css-loader',
        'less-loader',
        'postcss-loader',
      ],
    },
    {
      test: /\.(png|jpg|gif|webp)$/i,
      use: [
        // 'file-loader',
        {
          // url-loader 包含了 file-loader
          // 合并 url-loader和file-loader的options
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'images/[name].[ext]',
            publicPath: '/'
          },
        },
      ],
    },
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack learn',
      template: 'public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkHash:8].css'
    }),
    new CopyPlugin({
      patterns: [
        // { from: 'src/static/', to: 'static' },
        {
          from: path.resolve(process.cwd(), 'src/static/'),
          to: path.resolve(process.cwd(), 'dist/static/'),
        }
      ],
    }),
  ],
  devServer: {
    port: 3000,
    open: true
  }
}