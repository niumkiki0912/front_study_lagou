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
      // minimize: true
    },
    module: {
      rules: [
        {
          test: /.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              // presets: ['@babel/preset-env']
              presets: [
                // ['@babel/preset-env', { modules: 'commonjs'}] //默认为auto, 强制使用bable的es Module插件， tree-shaking失效
                // ['@babel/preset-env', { modules: false}] //  不使用bable的es Module插件
              ]
            }
          }
        },
      ]
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