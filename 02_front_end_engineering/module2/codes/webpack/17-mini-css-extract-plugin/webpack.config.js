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
    filename: '[name].bundle.js'
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
    new MiniCssExtractPlugin(),
    // new OptimizeCssAssetsWebpackPlugin() // 压缩css代码，这种压缩类插件建议放到optimization中的minimizer
  ]
}
