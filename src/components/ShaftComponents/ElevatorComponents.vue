<template>
  <div
    class="elevator"
    :style="{
      position: position,
      transform: 'translateY(-' + positionElevator * 100 + 'px)',
      transition: speedTime11 + 's linear',
      height: height,
    }"
  >
    <div v-if="getCallLine.length" class="elevator__scoreboard">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        class="elevator__scoreboard_arrow"
        :class="{ elevator__scoreboard_arrow_up: directionArrowUp }"
      >
        <g>
          <g>
            <path
              d="M512,256L247.209,55.793v138.405H0v123.604h247.209v138.405L512,256z M17.658,300.144v-88.289h247.209V91.28L482.721,256
			L264.867,420.72V300.144H17.658z"
            />
          </g>
        </g>
        <g>
          <g>
            <rect
              x="275.439"
              y="294.269"
              transform="matrix(0.7955 -0.606 0.606 0.7955 -111.4481 275.9842)"
              width="155.393"
              height="17.658"
            />
          </g>
        </g>
      </svg>
      {{ getCallLine[0] }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    position: {
      type: String,
      default: "static",
    },
    height: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      triggered: true,
      speed: "",
      lastFloor: "1",
    };
  },
  computed: {
    ...mapGetters({
      getCallLine: "getCallLine",
    }),
    positionElevator() {
      return this.getCallLine.length ? this.getCallLine[0] : this.lastFloor;
    },
    speedTime11() {
      return Math.abs(this.lastFloor - this.getCallLine[0]);
    },
    directionArrowUp() {
      return this.lastFloor - this.getCallLine[0] < 0 ? true : false;
    },
  },
  methods: {
    speedTime() {
      this.speed = Math.abs(this.lastFloor - this.getCallLine[0]);
    },
  },
  watch: {
    getCallLine() {
      if (this.getCallLine.length > 0 && this.triggered) {
        this.triggered = false;
        this.$store.commit("setLastElevatorPosition", 0);
        this.speedTime();

        let timer = setInterval(() => {
          console.log("Interval");

          console.log(
            " c " +
              this.lastFloor +
              " до " +
              this.getCallLine[0] +
              " скорость: " +
              this.speedTime11
          );

          if (this.getCallLine.length == 1) {
            this.lastFloor = this.getCallLine[0];
            this.triggered = true;
            this.$store.commit("delCall");
            this.$store.commit("setLastElevatorPosition", this.lastFloor);
            clearTimeout(timer);
          } else {
            this.lastFloor = this.getCallLine[0];
            this.$store.commit("delCall");
            this.speedTime();
          }
        }, this.speed * 1000 + 3000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.elevator {
  width: 100%;
  background: rgba(118, 251, 253, 0.7);
  display: flex;
  justify-content: center;
  padding-top: 10px;

  &__scoreboard {
    width: 30px;
    height: 20px;
    background-color: rgba(38, 1, 253, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;

    &_arrow {
      margin-right: 5px;
      transform: rotate(90deg);
      transition: all 0.1s linear;
    }

    &_arrow_up {
      transform: rotate(-90deg);
    }
  }
}
</style>