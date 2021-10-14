const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const resolve = file => path.resolve(__dirname, file)
const isProd = process.env.NODE_ENV === 'production'


module.exports = {
  mode: isProd ? 'production': 'development',
  output: {
    path: resolve('../dist'),
    publicPath: '/dist/',
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    alias: {
      '@': resolve('../src/')
    },
    // 可以省略的扩展名
    extensions: ['.js', '.vue', '.json']
  },
  devtool: isProd ? 'source-map' : 'cheap-module-source-map',
  module: {
    rules: [
      // 处理图片资源
      {
        test: '/\.(png|jpg|gif)$/',
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      // 处理字体资源
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, 
        use: [ 'file-loader'],
      },
      // 处理vue资源
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // 处理css资源
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new FriendlyErrorsWebpackPlugin()
  ]
}