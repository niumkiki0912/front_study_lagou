import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router/index'
import { createStore } from './store/index'
import VueMeta from 'vue-meta'

Vue.use(VueMeta)

Vue.mixin({
  metaInfo: {
    titleTemplate: '%s - 拉勾教育'
  }
})

// 导出一个工厂函数，用于创建新的
// 应用程序、router 和 store 实例
export function createApp () {
  // 创建router实例
  const router = createRouter()
  const store = createStore()
  const app = new Vue({
    // 注入router到根Vue实例
    router,
    store,
    // 根实例简单的渲染应用程序组件。
    render: h => h(App)
  })
  return { app, router, store }
}