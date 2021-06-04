<template>
  <div class="header-set">
    <div class="header-right">
      <img src="../assets/观看.png" alt="欢迎光临" class="header-right-img" />
      <div class="collapse-style" @click="changeCollapse">
        <i
          :class="collapse == true ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
          class="collapse-style"
        ></i>
      </div>

      <SpanStyle spanText="Vue 全家桶" animationType="pop"></SpanStyle>
    </div>
    <div class="header-left">
      <div class="avator-icon">
        <el-avatar
          size="medium"
          icon="el-icon-user-solid"
          sharp="circle"
          alt="欢迎~"
        ></el-avatar>
      </div>

      <el-dropdown>
        <span class="el-dropdown-link">
          <el-button type="primary"
            >菜单<i class="el-icon-arrow-down el-icon--right"></i
          ></el-button>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>退出</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item></el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import SpanStyle from "comps/spanComps/spanStyle.vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "HomeHeader",
  components: {
    SpanStyle,
  },
  methods: {
    changeCollapse() {
      // console.log(this.collapse);
      this.$store.commit("ChangeCollapse", !this.collapse);
    },
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
@import "styles/homeHeader";
</style>