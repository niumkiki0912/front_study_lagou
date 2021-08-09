const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const webpack = require('webpack')



module.exports = (env, argv) => {
  const config = {
    mode: 'none',
    entry: './src/index.js',
    output: {
      filename: 'js/bundle.js',
      path: path.join(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
      // usedExports: true,
      // concatenateModules: true,
      sideEffects: true
    },
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