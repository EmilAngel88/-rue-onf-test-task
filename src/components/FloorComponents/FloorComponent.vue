<template>
  <div :class="$style.floor">
    <div :class="$style.number">
      Этаж: {{ floor }}
    </div>
    <ElevatorButton
      :floor="floor"
      @click="addToLine"
    />
  </div>
</template>

<script>

import { ElevatorAsObject } from '@/assets/fsm';

import ElevatorButton from "@/components/FloorComponents/ElevatorButton.vue";

export default {
  components: {
    ElevatorButton,
  },

  props: {
    floor: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      ElevatorAsObject,
    }
  },

  methods: {
    addToLine() {
      ElevatorAsObject.callElevator(this.floor);
    },
  },
};
</script>

<style lang="scss" module>
.floor {
  width: 100%;
  height: 100px;
  border-bottom: 1px solid rgba(89, 89, 89, 0.3);
  padding-left: 15px;
  padding-top: 10px;
}

.number {
  margin-bottom: 5px;
}
</style>
