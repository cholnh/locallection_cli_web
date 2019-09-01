import axios from 'axios'
import {store} from '@/store/store'

const baseDomain = 'https://localhost:9530'
const baseURL = `${baseDomain}/api/v1`

export default (headers) => {
  let _axios = axios.create({
    baseURL,
    headers: headers
    // withCredentials: true
  })
  _axios.interceptors.request.use(request => {
    const { accessToken } = sessionStorage
    if (accessToken) {
      request.headers.common['Authorization'] = accessToken
    }
    return request
  })
  _axios.interceptors.response.use(response => {
    return Promise.resolve(response)
  }, async (err) => {
    const originalRequest = err.config
    switch (err.response.status) {
      case 400:
        break
      case 401:
        if (!await store.dispatch('getOauth2refreshToken')) {
          await store.dispatch('getOauth2guestToken')
        }
        originalRequest._retry = true
        return _axios(originalRequest).then((response) => {
          console.log('[axios] retry request')
          return Promise.resolve(response)
        })
      default:
        break
    }
    console.err(err)
    return Promise.reject(err)
  })
  return _axios
}
