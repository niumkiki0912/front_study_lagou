const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { compilation } = require('webpack')

class Myplugin {
  apply(compiler) {
    console.log('plugin 启动')
    compiler.hooks.emit.tap('Myplugin', compilation => {
      console.log('===>',compilation.assets );
      for(const name in compilation.assets) {
        if(name.endsWith('.js'))  {
          const content = compilation.assets[name].source()
          const withoutComments = content.replace(/\/*\*+\*\//g, '')
          compilation.assets[name] = {
            source: () => withoutComments,
            size: () => withoutComments.length
          }
        }
      }
    })
  }
}

module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
 
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.png$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100 * 1024 // 超过100kb， 使用file-loader处理
          }
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack-plugin-sample',
      meta: {
        viewport: 'width=device-width'
      },
      template: './src/index.html'
    }),
    // new HtmlWebpackPlugin({
    //   filename: 'about.html'
    // }),

    // 开发过程中一般不会频繁执行
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: "public",
    //       to: "public",
    //     },
    //   ]
    // }),

    // 开发自己的plugin---去掉bundle中前边的注释
    // new Myplugin()
  ]
}