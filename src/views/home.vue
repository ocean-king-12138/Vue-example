<template>
  <!-- 头部 -->
  <div class="header-style"><HomeHeader></HomeHeader></div>
  <!-- 左边侧边栏 -->
  <HomeAsider></HomeAsider>
  <div class="contant" :class="{ isCollapse: !collapse }">
    <Tags></Tags>
    <hr />
    <router-view v-slot="{ Component }">
      <component :is="Component"></component>
    </router-view>
    <el-divider class="footer">联系我</el-divider>
  </div>
  <!-- 右侧内容区 -->
  <div class="body-style"></div>
</template>
<script lang="ts">
import HomeHeader from "comps/Header.vue";
import Tags from "comps/Tags.vue";
import { defineComponent } from "vue";
import HomeAsider from "comps/Asider.vue";
export default defineComponent({
  name: "home",
  components: {
    HomeHeader,
    HomeAsider,
    Tags,
  },
  computed: {
    collapse() {
      return this.$store.state.collapse;
    },
  },
  setup() {},
});
</script>
<style lang="scss" scoped>
@import "styles/home";
</style>