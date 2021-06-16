const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: {
    index: './src/index.js',
  },
  output: {
    // filename: '[name]-[hash].bundle.js' //项目级别的，项目中有任何变动，hash值都会改变
    // filename: '[name]-[chunkhash].bundle.js' //chunk级别的，打包过程中同一路的打包chunkhash都是相同的
    filename: '[name]-[contenthash:8].bundle.js' //文件级别的，不同文件就有不同的hash值, 较好的处理方式, :8指定hash长度
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new OptimizeCssAssetsWebpackPlugin(), // webpack认为如果用了这个minimizer，就是自定义压缩，所以不会自动压缩js代码了(@_@)
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Dynamic Import',
      template: './src/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      // filename: '[name]-[hash].bundle.css'
      // filename: '[name]-[chunkhash].bundle.css'
      filename: '[name]-[contenthash].bundle.css'
    }),
    // new OptimizeCssAssetsWebpackPlugin() // 压缩css代码，这种压缩类插件建议放到optimization中的minimizer
  ]
}
