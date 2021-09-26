import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _489840cc = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _7f673b01 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _6db86d87 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _8b0c0f72 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _26052145 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _3cc9670f = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _bd7788d8 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _489840cc,
    children: [{
      path: "",
      component: _7f673b01,
      name: "home"
    }, {
      path: "/login",
      component: _6db86d87,
      name: "login"
    }, {
      path: "/register",
      component: _6db86d87,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _8b0c0f72,
      name: "profile"
    }, {
      path: "/settings",
      component: _26052145,
      name: "settings"
    }, {
      path: "/editor",
      component: _3cc9670f,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _bd7788d8,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
