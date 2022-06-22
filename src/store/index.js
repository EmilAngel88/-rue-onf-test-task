import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    callLine: [],
    lastElevatorPosition: "1"
  },
  getters: {
    getCallLine: (state) => {
      return state.callLine
    },
    getLastElevatorPosition: (state) => {
      return state.lastElevatorPosition
    }
  },
  mutations: {
    setCall(state, payload) {
      if (!state.callLine.includes(payload) && state.lastElevatorPosition !== payload) {
        state.callLine.push(payload)
      }
    },
    delCall(state) {
      state.callLine.shift()
    },
    setLastElevatorPosition(state, payload) {
      state.lastElevatorPosition = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
