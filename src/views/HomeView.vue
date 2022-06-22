<template>
  <div class="home">
    <ShaftComponent />
    <div class="floors">
      <FloorComponent
        v-for="i in floors"
        :key="i"
        :floor="floors - (i - 1)"
        :height="`100px`"
      />
    </div>
  </div>
</template>

<script>
import floors from "@/config/index";
import FloorComponent from "@/components/FloorComponents/FloorComponent.vue";
import ShaftComponent from "@/components/ShaftComponents/ShaftComponent.vue";
export default {
  name: "HomeView",
  components: {
    FloorComponent,
    ShaftComponent,
  },
  data() {
    return {
      floors,
      callLine: [],
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  background-color: #eee;

  .floors {
    width: 100%;
  }
}
</style>
