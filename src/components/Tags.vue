<template>
  <div class="tags">
    <ul class="tags-ul">
      <li
        v-for="(item, index) in tagsList"
        :key="index"
        class="tags-ul-li"
        :class="{ 'tags-ul-li-active': isActive(item.path) }"
      >
        <router-link :to="item.path"> {{ item.title }}</router-link>
        <span>
          <i class="el-icon-close" @click="closeTag(index)"></i>
        </span>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Tags",
  methods: {
    isActive(path) {
      // console.log(path);
      return path === this.$route.fullPath;
    },
    closeTag(index) {
      this.$store.commit("CloseTags", { index });
      const item = this.tagsList[index]
        ? this.tagsList[index]
        : this.tagsList[index - 1];
      if (item) {
        this.$router.push(item.path);
      } else {
        this.$router.push("/");
      }
    },
    setTags(route) {
      const isExist = this.tagsList.some((item) => {
        return item.path === route.fullPath;
      });
      if (!isExist) {
        this.$store.commit("SetTags", {
          name: route.name,
          title: route.meta.title,
          path: route.fullPath,
        });
      }
    },
  },
  watch: {
    $route(newValue) {
      this.setTags(newValue);
    },
  },
  created() {
    this.setTags(this.$route);
  },
  computed: {
    tagsList() {
      return this.$store.state.tagsList;
    },
  },
  setup() {
    // const { proxy } = getCurrentInstance();
    // console.log(proxy);
    return {};
  },
});
</script>
<style lang="scss" scoped>
@import "styles/tags";
</style>
