// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '小青蛙在线',
  siteDescription: '大前端',
  titleTemplate: `%s-小青蛙在线`,
  plugins: [],
  templates: {
    Post: [
      {
        path: '/posts/:id',
        component: './src/templates/Post.vue'
      }
    ]
  }
}

