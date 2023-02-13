<template>
  <div :class="$style.shaft">
    <div
        v-for="i in floors"
        :key="i"
        :class="$style.floor"
    ></div>
    <ElevatorComponents
        :position="`absolute`"
        :height="`100px`"
    />
  </div>
</template>

<script>

import floors from "@/config/index";

import ElevatorComponents from "@/components/ShaftComponents/ElevatorComponents.vue";

export default {
  components: {
    ElevatorComponents,
  },

  data() {
    return {
      floors,
    };
  },
};
</script>

<style lang="scss" module>
.shaft {
  width: 80px;
  margin-left: 10px;
  border-left: 2px solid rgba(89, 89, 89, 0.8);
  border-right: 2px solid rgba(89, 89, 89, 0.8);
  position: relative;
}

.floor {
  height: 100px;
  width: 100%;
  border-bottom: 1px solid rgba(89, 89, 89, 0.3);
}
</style>