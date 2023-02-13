<template>
  <div
    :class="$style.elevator"
    :style="{
      transform: 'translateY(-' + positionElevator * 100 + 'px)',
      transition: elevatorSpeed + 's linear',
    }"
  >
    <div
      v-if="isElevatorAwaiting || isElevatorMoving"
      :class="$style.scoreboard"
    >
      <template v-if="isElevatorMoving">
        <IconArrow :class="[$style.scoreboardArrow, {
            [$style.arrowUp]: directionArrow,
          }]"
        />
        {{ currentState.nextFloor }}
      </template>
      <span v-if="isElevatorAwaiting">
        {{ time }}
      </span>
    </div>
  </div>
</template>

<script>

import { ElevatorAsObject } from '@/assets/fsm';

import IconArrow from './IconArrow'

export default {
  components: {
    IconArrow,
  },

  data() {
    return {
      ElevatorAsObject,

      time: 3,
      timer: null,
    };
  },

  computed: {
    currentState() {
      return ElevatorAsObject.state[ElevatorAsObject.state.length - 1];
    },

    prevState() {
      return ElevatorAsObject.state[ElevatorAsObject.state.length - 2] ? ElevatorAsObject.state[ElevatorAsObject.state.length - 2] : 0;
    },

    positionElevator() {
      return this.currentState.nextFloor ? this.currentState.nextFloor : this.currentState.floor;
    },

    isElevatorAwaiting() {
      return this.currentState.isWaiting;
    },

    isElevatorMoving() {
      return this.currentState.isMoving;
    },

    floorDistance() {
      return this.currentState.nextFloor - this.prevState.floor;
    },

    elevatorSpeed() {
      return Math.abs(this.floorDistance);
    },

    directionArrow() {
      return this.floorDistance > 0;
    },
  },

  methods: {
    setTimer() {
      this.timer = setInterval(this.timerHandler, 1000);
    },

    timerHandler() {
      this.time -= 1;
    },
  },

  watch: {
    isElevatorAwaiting(val) {
      if(val) {
        this.setTimer();
      } else {
        clearInterval(this.timer);
        this.time = 3;
      }
    },
  },
};
</script>

<style lang="scss" module>
.elevator {
  width: 100%;
  height: 100px;
  position: absolute;
  background: rgba(118, 251, 253, 0.7);
  display: flex;
  justify-content: center;
  padding-top: 10px;
}

.scoreboard {
  width: 30px;
  height: 20px;
  background-color: rgba(38, 1, 253, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.scoreboardArrow {
  margin-right: 5px;
  transform: rotate(90deg);
  transition: all 0.1s linear;
}

.arrowUp {
  transform: rotate(-90deg);
}
</style>