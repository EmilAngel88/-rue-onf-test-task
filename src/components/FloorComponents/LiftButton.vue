<template>
  <div
    :style="{ 'margin-top': mt, 'margin-left': ml }"
    @mousedown="isButtonDown = !isButtonDown"
    @mouseup="isButtonDown = !isButtonDown"
    :class="{ 'lift-button__pressing': isButtonDown }"
    class="lift-button"
  >
    <div class="lift-button__center"></div>
  </div>
</template>

<script>
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
  },
  data() {
    return {
      isButtonDown: false,
    };
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

  &__center {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: rgba(65, 149, 165, 0.9);
  }

  &__pressing {
    background: #ccc;
  }
}
</style>