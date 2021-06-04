<template>
  <div class="sider">
    <el-menu
      class="sider-el-menu"
      default-active="1"
      background-color="#090723"
      text-color="#848391"
      active-text-color="#ffd04b"
      :collapse="collapse"
      router
    >
      <template v-for="item in staticList" :key="item.index">
        <template v-if="item.subs">
          <el-submenu :index="item.index">
            <template #title>
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <el-menu-item-group>
              <template v-for="subitem in item.subs" :key="subitem.index">
                <el-menu-item :index="subitem.index">
                  <i :class="item.icon"></i>
                  <span>{{ subitem.title }}</span>
                </el-menu-item>
              </template>
            </el-menu-item-group>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index">
            <i :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "HomeAsider",
  computed: {
    collapse() {
      //   console.log(this.$store.state.collapse);
      return this.$store.state.collapse;
    },
  },
  setup() {
    return {
      staticList: useStore().state.staticList,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "styles/asider";
</style>