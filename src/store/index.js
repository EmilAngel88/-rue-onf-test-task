import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    callLine: [],
  },
  getters: {
    getCallLine: (state) => {
      return state.callLine
    },
  },
  mutations: {
    setCall(state, payload) {
      if (!state.callLine.includes(payload)) {
        state.callLine.push(payload)
      }
    },
    delCall(state) {
      state.callLine.shift()
    },
  },
  actions: {
  },
  modules: {
  }
})
