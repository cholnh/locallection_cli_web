import Vue from 'vue'
import Vuex from 'vuex'
import { tokenModule } from './modules/token'
import { testModule } from './modules/test'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    token: tokenModule,
    test: testModule
  }
})
