<template>
  <div class="dropdown-style">
    <DropDown :dropDownLists="dropDownLists"></DropDown>

    <VueSwitch :nameSolt="nameSolt">
      <template #bar>
        <div>这是第一个插槽</div>
      </template>
      <template #zoo>
        <div>这是第二个插槽</div>
      </template>
      <template #default>
        <div>这是默认插槽</div>
      </template>
    </VueSwitch>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import DropDown from "comps/otherComps/dropdown.vue";
import VueSwitch from "comps/otherComps/vueswitch.vue";
export default defineComponent({
  name: "dropDownStyle",
  components: { DropDown, VueSwitch },
  setup() {
    let i = 0;
    let soltTags = ["bar", "zoo", "default"];
    setInterval(() => {
      exportDate.nameSolt.value = soltTags[i];
      i++;
      if (i > 2) i = 0;
    }, 3000);
    const exportDate = {
      nameSolt: ref(""),
      dropDownLists: [
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
      ],
    };
    return {
      ...exportDate,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "styles/dropDownStyle";
</style>