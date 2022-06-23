import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    callLine: JSON.parse(localStorage.getItem('callLine') || '[]'),
    lastElevatorPosition: JSON.parse(localStorage.getItem('lastElevatorPosition') || '1'),
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

        localStorage.setItem('callLine', JSON.stringify(state.callLine))
      }
    },
    delCall(state) {
      state.callLine.shift()

      const removeCalls = JSON.parse(localStorage.getItem('callLine'));
      removeCalls.shift();
      localStorage.setItem('callLine', JSON.stringify(removeCalls));
    },
    setLastElevatorPosition(state, payload) {
      state.lastElevatorPosition = payload

      localStorage.setItem('lastElevatorPosition', JSON.stringify(state.lastElevatorPosition))
    }
  },
  actions: {
  },
  modules: {
  }
})
