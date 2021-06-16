const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const webpack = require('webpack')



module.exports = (env, argv) => {
  const config = {
    mode: 'development',
    entry: './src/main.js',
    output: {
      filename: 'js/bundle.js',
      path: path.join(__dirname, 'dist'),
    },
    devServer: {
      contentBase: './public',
      hotOnly: true,
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
      new HtmlWebpackPlugin({
        title: 'webpack-plugin-sample',
        meta: {
          viewport: 'width=device-width'
        },
        template: './src/index.html'
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
  }
  
  if(env === 'production') {
    config.mode = 'production'
    config.devtool = false
    config.plugins = [
      ...config.plugins,
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin(['public'])

    ]
  }

  return config
}