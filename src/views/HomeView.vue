<template>
  <div class="home">
    <ShaftComponent />
    <div class="floors">
      <FloorComponent
        v-for="i in floors"
        :key="i"
        :floor="floors - (i - 1)"
        :height="`100px`"
        @addTargetFloor="addTargetFloor"
      />
    </div>
  </div>
</template>

<script>
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
      floors: 5,
      callLine: [],
    };
  },
  methods: {
    addTargetFloor(floor) {
      this.callLine.push(floor);
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  height: 500px;
  background-color: #eee;

  .floors {
    width: 100%;
  }
}
</style>
