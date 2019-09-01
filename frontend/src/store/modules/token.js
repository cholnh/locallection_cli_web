import axios from 'axios'

export const tokenModule = {
  getters: {
    getAccessToken: function (state) {
      return sessionStorage.accessToken
    },
    getRefreshToken: function (state) {
      return sessionStorage.refreshToken
    }
  },
  mutations: {
    setAccessToken (state, payload) {
      sessionStorage.accessToken = payload
    },
    setRefreshToken (state, payload) {
      sessionStorage.refreshToken = payload
    },
    clearAccessToken (state) {
      sessionStorage.removeItem('accessToken')
    },
    clearRefreshToken (state) {
      sessionStorage.removeItem('refreshToken')
    }
  },
  actions: {
    async getOauth2guestToken (context) {
      try {
        const {data} = await axios.post('https://localhost:8084/oauth/token/guest')
        if ('access_token' in data) {
          let accessToken = `Bearer ${data.access_token}`
          context.commit('setAccessToken', accessToken)
          console.log('[Oauth2] Issue guest token')
          return true
        }
      } catch (err) {
        console.error(err)
      }
      return false
    },
    async getOauth2userToken (context, payload) {
      try {
        const {data} = await axios.post('https://localhost:8084/oauth/token/user', payload)
        if ('access_token' in data) {
          let accessToken = `Bearer ${data.access_token}`
          let refreshToken = data.refresh_token
          context.commit('setAccessToken', accessToken)
          context.commit('setRefreshToken', refreshToken)
          console.log('[Oauth2] Issue user token (using password)')
          return true
        }
      } catch (err) {
        console.error(err)
      }
      return false
    },
    async getOauth2refreshToken (context) {
      try {
        let refreshToken = this.getRefreshToken
        if (refreshToken && refreshToken.length !== 0) {
          const response = await axios.post('https://localhost:8084/oauth/token/refresh', refreshToken)
          switch (response.status) {
            case 200:
              let {data} = response
              if ('access_token' in data) {
                let accessToken = `Bearer ${data.access_token}`
                context.commit('setAccessToken', accessToken)
                console.log('[Oauth2] Issue user token (using refresh token)')
                return true
              }
              break
            case 401:
              context.commit('clearAccessToken')
              context.commit('clearRefreshToken')
              console.log('[Oauth2] refresh token has expired')
              break
            default:
              break
          }
        }
      } catch (err) {
        console.error(err)
      }
      return false
    }
  }
}
