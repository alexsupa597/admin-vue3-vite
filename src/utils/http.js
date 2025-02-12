// src/utils/http.js
import requestInstance from './request' // 引入已经配置好的 Axios 实例

// 封装 GET 请求
export const get = (url, params = {}) => {
  return requestInstance.get(url, { params })
}

// 封装 POST 请求
export const post = (url, data = {}, config = {}) => {
  return requestInstance.post(url, data, config)
}
