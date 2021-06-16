const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './public',
    proxy: {
      "/api": {
        // http://localhost:8080/api/users  --->  https://api.github.com/api/users
        target: 'https://api.github.com',
        pathRewrite: {
          '^/api': ''
        },
        // 不能用localhost:8080 作为请求 gitHub 的主机名
        changeOrigin: true
      }
    }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /.png$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100 * 1024 // 超过100kb， 使用file-loader处理
          }
        }
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack-plugin-sample',
      meta: {
        viewport: 'width=device-width'
      },
      template: './src/index.html'
    }),

    // 开发过程中一般不会频繁执行
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: "public",
    //       to: "public",
    //     },
    //   ]
    // })
  ]
}