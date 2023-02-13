<template>
  <div
      @click="$emit('click')"
      @mousedown="isButtonDown = !isButtonDown"
      @mouseup="isButtonDown = !isButtonDown"
      :class="[ $style.liftButton, {
        [$style.pressing]: isButtonDown,
        [$style.btnChoised]: isFloorChoised,
      }]"
  >
    <div
      :class="[ $style.center, {
        [$style.centerChoised]: isFloorChoised,
      }]"
    ></div>
  </div>
</template>

<script>

import { ElevatorAsObject } from '@/assets/fsm';

export default {
  props: {
    floor: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      isButtonDown: false,
    };
  },

  computed: {
    currentState() {
      return ElevatorAsObject.state[ElevatorAsObject.state.length - 1];
    },

    isElevatorMoving() {
      return this.currentState.nextFloor === this.floor;
    },

    isElevatorAwaiting() {
      return this.currentState.isWaiting && this.currentState.floor === this.floor;
    },

    isFloorWasCalled() {
      return ElevatorAsObject.pressedButtons.includes(this.floor);
    },

    isFloorChoised() {
      return Boolean(this.isFloorWasCalled || this.isElevatorMoving || this.isElevatorAwaiting);
    },
  },
};
</script>

<style lang="scss" module>
.liftButton {
  width: 20px;
  height: 20px;
  border: 1px solid rgba(65, 149, 165, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.1s;
}

.btnChoised {
  border: 1px solid rgba(231, 135, 55, 0.9);
}

.pressing {
  background: #ccc;
}

.center {
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: rgba(65, 149, 165, 0.9);
  transition: all 0.1s;
}

.centerChoised {
  background-color: rgba(231, 135, 55, 0.9);
}
</style>