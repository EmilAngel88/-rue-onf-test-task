<template>
  <div class="shaft">
    <div v-for="i in floors" :key="i" class="shaft__floor">
      {{ targetFloor }}
    </div>
    <ElevatorComponents :position="`absolute`" :height="`100px`" />
  </div>
</template>

<script>
import floors from "@/config/index";
import { mapGetters } from "vuex";
import ElevatorComponents from "@/components/ShaftComponents/ElevatorComponents.vue";
export default {
  components: {
    ElevatorComponents,
  },
  data() {
    return {
      floors,
      targetFloor: "0",
      lengthLine: "",
    };
  },
  computed: {
    ...mapGetters({ getCallLine: "getCallLine" }),
  },
};
</script>
<style lang="scss" scoped>
.shaft {
  width: 80px;
  margin-left: 10px;
  border-left: 2px solid rgba(89, 89, 89, 0.8);
  border-right: 2px solid rgba(89, 89, 89, 0.8);
  position: relative;

  &__floor {
    height: 100px;
    width: 100%;
    border-bottom: 1px solid rgba(89, 89, 89, 0.3);
  }
}
</style>