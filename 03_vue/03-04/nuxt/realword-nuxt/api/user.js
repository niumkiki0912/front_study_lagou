import {request} from '@/plugins/request'


// 用户登录
export const login = data => request({
  method: 'POST',
  url: '/api/users/login',
  data
})

// 用户注册
export const register = data => request({
  method: 'POST',
  url: '/api/users',
  data
})

// 获取当前用户信息
export const getUser = data => request({
  method: 'GET',
  url: '/api/user',
})

// 修改用户信息
export const updateUser = data => request({
  method: 'PUT',
  url: '/api/user',
  data
})

// 获取profile
export const getProfile = username => request({
  method: 'GET',
  url: `/api/profiles/${username}`,
})


// 关注用户
export const followUser = username => request({
  method: 'POST',
  url: `/api/profiles/${username}/follow`,
})

// 取消关注用户
export const unFollowUser = username => request({
  method: 'DELETE',
  url: `/api/profiles/${username}/follow`,
})
