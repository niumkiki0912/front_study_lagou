import { request } from '@/plugins/request'

// 获取公共文章列表
export const getArticles = params => request({
  method: 'GET',
  url: '/api/articles',
  params
})

// 获取我的文章列表
export const getYourFeedArticles = params => request({
  method: 'GET',
  url: '/api/articles/feed',
  params,
})


// 添加点赞
export const addFavorite = slug => request({
  method: 'POST',
  url: `/api/articles/${slug}/favorite`
})

// 取消点赞
export const deleteFavorite = slug => request({
  method: 'DELETE',
  url: `/api/articles/${slug}/favorite`
})

// 获取文章详情
export const getArticle = slug => request({
  method: 'GET',
  url: `/api/articles/${slug}`
})

// 获取文章评论
export const getComments = slug => request({
  method: 'GET',
  url: `/api/articles/${slug}/comments`
})


// 发布文章
export const addArticle = data => request({
  method: 'POST',
  url: `/api/articles`,
  data
})

// 编辑文章
export const updateArticle = (slug, data) => request({
  method: 'PUT',
  url: `/api/articles/${slug}`,
  data
})
