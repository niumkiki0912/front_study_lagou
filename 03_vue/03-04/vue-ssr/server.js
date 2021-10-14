const express = require('express')
const fs = require('fs')
const { createBundleRenderer } = require('vue-server-renderer')
const setupDevServer = require('./build/setup-dev-server')

const server = express()

// 处理的是物理磁盘中的静态资源
server.use('/dist', express.static('./dist'))

const isProd = process.env.NODE_ENV === 'production'

let renderer
let onReady
// 生产模式
if(isProd) {
  const serverBundle = require('./dist/vue-ssr-server-bundle.json')
  const clientManifest = require('./dist/vue-ssr-client-manifest.json')
  const template = fs.readFileSync('./index.template.html','utf-8')
  renderer = createBundleRenderer(serverBundle,  {
    runInNewContext: false, // 推荐
    template,
    clientManifest, // （可选）客户端构建 manifest
  })
} else {
  onReady = setupDevServer(server, (serverBundle, template, clientManifest) => {
    renderer = createBundleRenderer(serverBundle,  {
      runInNewContext: false, // 推荐
      template,
      clientManifest, // （可选）客户端构建 manifest
    })
  })
  // 开发模式
}

const render = async (req, res) => {
  try {
    const html =  await renderer.renderToString({
      title: '小青蛙',
      meta: `
        <meta name="description" content="小丫小青蛙">
      `,
      url: req.url
    })
    res.setHeader('content-Type', 'text/html;charset=utf-8')
    res.end(html)
  } catch(e) {
    res.status(500).end('Internal Server Error ')
  }
}
server.get('*', isProd 
  ? render
  : async (req, res) => {
    // 等待有了 Renderer 渲染器以后，调用 render 进行渲染
    await onReady
    render(req, res)
  }
)



server.listen(3000, () => {
  console.log('300 is runnig', );
})