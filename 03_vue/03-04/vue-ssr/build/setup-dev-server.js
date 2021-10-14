const fs = require('fs')
const path = require('path')
const chokidar = require('chokidar');
const webpack = require('webpack')
const devMiddleware = require("webpack-dev-middleware")
const hotMiddleware = require("webpack-hot-middleware")

const resolve = file => path.resolve(__dirname, file)

module.exports = (server, callback) => {
  let ready
  const onReady = new Promise(r => ready = r)

  // 监视构建 -> 更新 Renderer
  let serverBundle
  let template
  let clientManifest

  const update = () => {
    if(serverBundle && template && clientManifest) {
      ready()
      callback(serverBundle, template, clientManifest)
    }
  }

  // 监视构建 template -> 调用 update -> 更新 Renderer 渲染器
  const templatePath = resolve('../index.template.html')
  template = fs.readFileSync(templatePath, 'utf-8')
  update()
  // 监视文件 使用 chokidar 第三方包(封装了fs.watch)
  chokidar.watch(templatePath).on('change', (event, path) => {
    // 监视到变化之后重新读取文件并赋值
    template = fs.readFileSync(templatePath, 'utf-8')
    update()
  });
  

  // 监视构建 serverBundle -> 调用 update -> 更新 Renderer 渲染器
  const serverConfig = require('./webpack.server.config.js')
  const serverCompiler = webpack(serverConfig)
  const serverDevMiddleware = devMiddleware(serverCompiler, {
    // logLevel: 'silent'
  })
  serverCompiler.hooks.done.tap('server', () => {
    serverBundle = JSON.parse(
      serverDevMiddleware.context.outputFileSystem.readFileSync(resolve('../dist/vue-ssr-server-bundle.json'), 'utf-8')
    )
    console.log('serverBundle===>', serverBundle);
    update()
  })
  // watch方法
  // serverCompiler.watch({}, (err, stats) => {
  //   if(err) throw err
  //   if(stats.hasErrors()) return
  //   serverBundle = JSON.parse(
  //     fs.readFileSync(resolve('../dist/vue-ssr-server-bundle.json', 'utf-8'))
  //   )
  //   console.log('ok===>', serverBundle);
  // })


  // 监视构建 clientManifest -> 调用 update -> 更新 Renderer 渲染器
  const clientConfig = require('./webpack.client.config.js')
  clientConfig.plugins.push( new webpack.HotModuleReplacementPlugin())
  clientConfig.entry.app = [
    'webpack-hot-middleware/client',// 和服务端交互处理热更新的脚本
    clientConfig.entry.app
  ]
  clientConfig.output.filename = '[name].js'
  const clientCompiler = webpack(clientConfig)
  const clientDevMiddleware = devMiddleware(clientCompiler, {
    publicPath: clientConfig.output.publicPath,
  })
  clientCompiler.hooks.done.tap('client', () => {
    clientManifest = JSON.parse(
      clientDevMiddleware.context.outputFileSystem.readFileSync(resolve('../dist/vue-ssr-client-manifest.json'), 'utf-8')
    )
    console.log('clientManifest===>', clientManifest);
    
    update()
  })
  server.use(hotMiddleware(clientCompiler,  {
    log: false
  }))


  // 将clientDevMiddleware挂载到express服务中，提供对其内部内存中数据的访问
  server.use(clientDevMiddleware)
  return onReady
}