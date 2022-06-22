<template>
  <div
    :style="{ 'margin-top': mt, 'margin-left': ml }"
    @mousedown="isButtonDown = !isButtonDown"
    @mouseup="isButtonDown = !isButtonDown"
    :class="{
      'lift-button__pressing': isButtonDown,
      'lift-button__choised': isFloorChoised,
    }"
    class="lift-button"
  >
    <div
      class="lift-button__center"
      :class="{
        'lift-button__center-choised': isFloorChoised,
      }"
    ></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    mt: {
      type: String,
      default: "",
    },
    ml: {
      type: String,
      default: "",
    },
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
    ...mapGetters({
      getCallLine: "getCallLine",
    }),
    isFloorChoised() {
      return this.getCallLine.includes(this.floor) ? 1 : 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.lift-button {
  width: 20px;
  height: 20px;
  border: 1px solid rgba(65, 149, 165, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.1s;

  &__choised {
    border: 1px solid rgba(231, 135, 55, 0.9);
  }

  &__center {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: rgba(65, 149, 165, 0.9);
    transition: all 0.1s;

    &-choised {
      background-color: rgba(231, 135, 55, 0.9);
    }
  }

  &__pressing {
    background: #ccc;
  }
}
</style>