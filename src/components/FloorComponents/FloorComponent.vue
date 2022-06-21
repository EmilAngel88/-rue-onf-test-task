<template>
  <div class="floor" :style="{ height: height }">
    <div class="floor__number">Этаж: {{ floor }}</div>
    <LiftButton @click.native="on" :mt="`5px`" />
  </div>
</template>

<script>
import LiftButton from "@/components/FloorComponents/LiftButton.vue";
export default {
  components: {
    LiftButton,
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
    on() {
      this.$emit("addTargetFloor", this.floor);
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
