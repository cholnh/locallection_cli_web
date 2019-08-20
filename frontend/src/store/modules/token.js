import axios from 'axios'

export const tokenModule = {
  state: {
    accessToken: null,
    refreshToken: null
  },
  getters: {
    getAccessToken: function (state) {
      return state.accessToken
    },
    getRefreshToken: function (state) {
      return state.refreshToken
    }
  },
  mutations: {
    setAccessToken (state, payload) {
      state.accessToken = payload
    },
    setRefreshToken (state, payload) {
      state.refreshToken = payload
    }
  },
  actions: {
    async getOauth2guestToken (context) {
      try {
        const {data} = await axios.post('https://localhost:8084/oauth/token/guest')
        context.commit('setAccessToken', data.access_token)
      } catch (err) {
        context.commit('setAccessToken', err)
        context.commit('setRefreshToken', '')
      }
    },
    async getOauth2userToken (context, payload) {
      try {
        const {data} = await axios.post('https://localhost:8084/oauth/token/user', payload)
        context.commit('setAccessToken', data.access_token)
        context.commit('setRefreshToken', data.refresh_token)
      } catch (err) {
        context.commit('setAccessToken', err)
        context.commit('setRefreshToken', '')
      }
    },
    async getOauth2refreshToken (context, payload) {
      try {
        const {data} = await axios.post('https://localhost:8084/oauth/token/refresh', payload)
        context.commit('setAccessToken', data.access_token)
        context.commit('setRefreshToken', data.refresh_token)
      } catch (err) {
        context.commit('setAccessToken', err)
        context.commit('setRefreshToken', '')
      }
    }
  }
}
