import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    callLine: [],
    // elevatorPosition: ""
  },
  getters: {
    getCallLine: (state) => {
      return state.callLine
    },
    // getElevatorPosition: (state) => {
    //   return state.elevatorPosition
    // }
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
    // setElevatorPosition(state, payload) {
    //   state.elevatorPosition = payload
    // }
  },
  actions: {
  },
  modules: {
  }
})
