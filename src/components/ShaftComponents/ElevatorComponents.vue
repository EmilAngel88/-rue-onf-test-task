<template>
  <div
    class="elevator"
    :style="{ position: position, bottom: bottom, height: height }"
  ></div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      default: "static",
    },
    bottom: {
      type: String,
      default: "",
    },
    height: {
      type: String,
      default: "",
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
  align-items: center;
}
</style>