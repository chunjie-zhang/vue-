// eslint-disable-next-line no-unused-vars
import axios from 'axios'
// eslint-disable-next-line no-unused-expressions
// 地址开头的服务器地址
axios.defaults.baseURL = 'http://api.duyiedu.com'
// 拦截请求
axios.interceptors.request.use(function (config) {
  // 在发送请求前做些什么
  config.params = {
    ...config.params,
    // eslint-disable-next-line no-undef
    appkey: '_zcj9803_1558881875529'
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

export default axios
