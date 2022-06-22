<template>
  <div
    class="elevator"
    :style="{
      position: position,
      transform: 'translateY(-' + positionElevator * 100 + 'px)',
      transition: speed + 's linear',
      height: height,
    }"
  ></div>
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
      lengthLine: "",
      bottom: "0",
      triggered: true,
      speed: "5",
    };
  },
  computed: {
    ...mapGetters({
      getCallLine: "getCallLine",
    }),
    positionElevator() {
      return this.getCallLine.length ? this.getCallLine[0] : "1";
    },
  },
  watch: {
    getCallLine() {
      if (this.getCallLine.length > 1 && this.triggered) {
        this.triggered = false;
        this.speed = Math.abs(this.getCallLine[1] - this.getCallLine[0]);
        this.$store.commit("delCall");
        let timer = setInterval(() => {
          if (this.getCallLine.length == 1) {
            clearTimeout(timer);
            this.triggered = true;
          } else {
            this.$store.commit("delCall");
          }
        }, this.getCallLine[0] * 1000 + 3000);
      }
      if (this.getCallLine.length) {
        this.$store.commit("setElevatorPosition", this.getCallLine[0]);
      }
    },
  },
  mounted() {
    this.lengthLine = this.getCallLine.length;
    this.$store.commit("setCall", 1);
  },
};
</script>

<style lang="scss" scoped>
.elevator {
  width: 100%;
  background: rgba(118, 251, 253, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  // transition: all 1s linear;
}
</style>