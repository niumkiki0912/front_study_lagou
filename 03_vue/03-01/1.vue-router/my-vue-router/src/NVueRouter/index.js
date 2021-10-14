let _vue = null

export default class VueRouter {
  static install (Vue) {
    // 判断当前插件是否已安装
    if (VueRouter.install.installed) {
      return
    }
    VueRouter.install.installed = true
    // 把vue构造函数记录到全局变量上
    _vue = Vue
    // 把创建vue实例传入的router对象注入到vue上 --- 混入
    _vue.mixin({
      beforeCreate () {
        if (this.$options.router) {
          _vue.prototype.$router = this.$options.router
          this.$options.router.init()
        }
      }
    })
  }

  constructor (options) {
    this.options = options
    this.routerMap = {}
    this.data = _vue.observable({
      current: '/'
    })
  }

  init () {
    this.createRouteMap()
    this.initComponents(_vue)
    this.initEvent()
  }

  createRouteMap () {
    // 遍历所有的路由规则，并且放到routerMap中
    this.options.routes.map(route => {
      this.routerMap[route.path] = route.component
    })
  }

  initComponents (Vue) {
    Vue.component('router-link', {
      props: {
        to: String
      },
      render (h) {
        return h('a', {
          attrs: {
            href: this.to
          },
          on: {
            click: this.clickHandler
          }
        }, [this.$slots.default])
      },
      methods: {
        clickHandler (e) {
          history.pushState({}, '', this.to)
          this.$router.data.current = this.to
          e.preventDefault()
        }
      }
    })
    const self = this
    Vue.component('router-view', {
      render (h) {
        const component = self.routerMap[self.data.current]
        return h(component)
      }
    })
  }

  initEvent () {
    window.addEventListener('popstate', () => {
      this.data.current = window.location.pathname
    })
  }
}
