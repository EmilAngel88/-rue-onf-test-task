<template>
  <div :class="$style.home">
    <ShaftComponent />
    <div :class="$style.floors">
      <FloorComponent
        v-for="i in floors"
        :key="i"
        :floor="floors - (i - 1)"
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
    };
  },
};
</script>
<style lang="scss" module>
.home {
  display: flex;
  background-color: #eee;
}

.floors {
  width: 100%;
}
</style>
