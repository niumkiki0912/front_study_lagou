import { createApp } from './app'

export default async context => {
  // promise用法
  // return new Promise((resolve, reject) => {
  //   const { app, router } = createApp()
  //   router.push(context.url)

    // router.onReady(() => {
    //   console.log('onReady===>', );
      
    //   const matchedComponents = router.getMatchedComponents()
    //   // 匹配不到的路由，执行 reject 函数，并返回 404
    //   if (!matchedComponents.length) {
    //     return reject({ code: 404 })
    //   }
    //   resolve(app)
    // }, reject)
  // })
  
  const { app, router, store } = createApp()

  const meta = app.$meta() // here

  // 设置服务器端 router 的位置
  router.push(context.url)

  context.meta = meta

  await new Promise(router.onReady.bind(router))

  context.rendered = () => {
    // Renderer 会把 context.state 数据对象内联到页面模板中
    // 最终发送给客户端的页面中会包含一段脚本：window.__INITIAL_STATE__ = context.state
    // 客户端就要把页面中的 window.__INITIAL_STATE__ 拿出来填充到客户端 store 容器中
    context.state = store.state
  }
  
  
  return app
}