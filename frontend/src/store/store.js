import Vue from 'vue'
import Vuex from 'vuex'
import { tokenModule } from './modules/token'
import { testModule } from './modules/test'
import { mainGroundFloorModule } from './modules/main-ground-floor'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    tokenModule, testModule, mainGroundFloorModule
  }
})
