<template>
  <div class="dropdown-style">
    <DropDown :dropDownLists="dropDownLists"></DropDown>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import DropDown from "comps/otherComps/dropdown.vue";
export default defineComponent({
  name: "dropDownStyle",
  components: { DropDown },
  setup() {
    const dropDownLists = [
      {
        text: "选项1",
        value: 1,
      },
      {
        text: "选项2",
        value: 2,
      },
      {
        text: "选项3",
        value: 3,
      },
    ];
    return {
      dropDownLists,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "styles/dropDownStyle";
</style>