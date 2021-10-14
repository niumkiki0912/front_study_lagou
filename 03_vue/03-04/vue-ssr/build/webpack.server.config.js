const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(baseConfig, {
  entry: {
    app: './src/entry-server.js'
  },
  watch: true,
  // 这允许 webpack 以 Node 适用方式处理模块加载 
  // 并且还会在编译 Vue 组件时， 
  // 告知 `vue-loader` 输送面向服务器代码(server-oriented code)。 
  target: 'node',
  output: {
    filename: 'server-bundle.js',
    // 此处告知 server bundle 使用 Node 风格导出模块(Node-style exports) 
    libraryTarget: 'commonjs2'
  },
  // 不打包 node_modules 第三方包，而是保留 require 方式直接加载
  externals: [nodeExternals({
    // 白名单中的资源依然正常打包
    allowlist:  [/\.css$/]
  })],
  plugins: [
    // 此插件在输出目录中生成 `vue-ssr-server-bundle.json`。
    new VueSSRServerPlugin()
  ]
})