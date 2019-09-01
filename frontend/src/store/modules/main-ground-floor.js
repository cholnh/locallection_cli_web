export const mainGroundFloorModule = {
  state: {
    selectedComponent: 'MainAdContents'
  },
  getters: {
    getComponent: function (state) {
      return state.selectedComponent
    }
  },
  mutations: {
    setComponent (state, payload) {
      state.selectedComponent = payload
    }
  }
}
