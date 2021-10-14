const c1 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/mengkeniu/niumengke/study/lagou/front_study_lagou/03_vue/03-04/blog-of-gridsome/src/templates/Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/mengkeniu/niumengke/study/lagou/front_study_lagou/03_vue/03-04/blog-of-gridsome/src/templates/post.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/mengkeniu/niumengke/study/lagou/front_study_lagou/03_vue/03-04/blog-of-gridsome/src/pages/contact.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/mengkeniu/niumengke/study/lagou/front_study_lagou/03_vue/03-04/blog-of-gridsome/src/pages/about.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/mengkeniu/niumengke/study/lagou/front_study_lagou/03_vue/03-04/blog-of-gridsome/node_modules/gridsome/app/pages/404.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/mengkeniu/niumengke/study/lagou/front_study_lagou/03_vue/03-04/blog-of-gridsome/src/pages/Index.vue")

export default [
  {
    path: "/tag/:id/",
    component: c1
  },
  {
    path: "/post/:id/",
    component: c2
  },
  {
    path: "/contact/",
    component: c3
  },
  {
    path: "/about/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
