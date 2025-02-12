import axios from 'axios'
import store from '../store'

const baseURL = import.meta.env.VITE_APP_BASE_URL
console.log(`Current environment: ${import.meta.env.VITE_APP_ENV}`)
console.log(`Base URL: ${baseURL}`)

// 创建 axios 实例
const instance = axios.create({
  baseURL: baseURL, // 设置请求的基础路径
  timeout: 10000 // 设置请求超时时间
})

instance.interceptors.request.use(
  config => {
    // 添加 token
    // const token = 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImNhNjRmZDk0LTg4NzItNGRmMy04YWY3LTQxZjhmYzdjZjJhOSJ9.HLfay5LjIZy68UZivh97FZ5PwQLTyY0_xz8hggx2Cs27utkOjUUtqprzvj65CgZxC-2bNuzrnhY9qFMftVguqQ'
    const token = store.getters['userInfo/token']
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => {
    // 处理请求错误
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  response => {
    // 处理响应数据
    const data = response.data

    // 检查响应体中的状态码
    if (data.code === 401) {
      // 跳转到登录页面
      window.location.href = '/login'
      return Promise.reject(data)
    }

    return data
  },
  error => {
    // 处理响应错误
    console.error('Response error:', error)
    return Promise.reject(error)
  }
)

export default instance
