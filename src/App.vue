<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { ElevatorAsObject } from './assets/fsm';

export default {
  methods:{
    stateUpdateHandler (state) {
      console.log(state);
    },
  },

  mounted() {
    ElevatorAsObject.init(this.stateUpdateHandler);

    console.log(ElevatorAsObject.state[ElevatorAsObject.state.length - 1]);
  }
};
</script>
