<template>
  <div class="floor" :style="{ height: height }">
    <div class="floor__number">Этаж: {{ floor }}</div>
    <ElevatorButton :floor="floor" @click.native="addToLine" :mt="`5px`" />
  </div>
</template>

<script>
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
    height: {
      type: String,
      default: "",
    },
  },
  methods: {
    addToLine() {
      this.$store.commit("setCall", this.floor);
    },
  },
};
</script>

<style lang="scss" scoped>
.floor {
  width: 100%;
  border-bottom: 1px solid rgba(89, 89, 89, 0.3);
  padding-left: 15px;
  padding-top: 10px;
}
</style>
