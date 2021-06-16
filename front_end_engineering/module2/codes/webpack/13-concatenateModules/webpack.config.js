const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const webpack = require('webpack')



module.exports = (env, argv) => {
  const config = {
    mode: 'none',
    entry: './src/main.js',
    output: {
      filename: 'js/bundle.js',
      path: path.join(__dirname, 'dist'),
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
      usedExports: true,
      // minimize: true,
      concatenateModules: true,
    }
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