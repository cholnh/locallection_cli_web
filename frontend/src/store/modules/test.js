export const testModule = {
  state: {
    counter: 0,
    payload: 'vuex-payload'
  },
  getters: {
    getCounter: function (state) {
      return state.counter
    },
    getPayload: function (state) {
      return state.payload
    }
  },
  mutations: {
    add (state) {
      state.counter++
    },
    sub (state) {
      state.counter--
    },
    setPayload (state, payload) {
      state.payload = payload
    }
  }
}
