<template>
  <el-row type="flex">
    <el-col :span="12">
      <el-collapse-transition>
        <ImgMove :imgRoutes="imgRoutes"></ImgMove>
      </el-collapse-transition>
    </el-col>
    <el-col :span="12">
      <div class="block">
        <el-timeline>
          <el-timeline-item timestamp="2018/4/12" placement="top">
            <el-card>
              <h4>打代码</h4>
              <p>2018/4/12 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/3" placement="top">
            <el-card>
              <h4>打代码</h4>
              <p>2018/4/3 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/2" placement="top">
            <el-card>
              <h4>打代码</h4>
              <p>2018/4/2 20:46</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </el-col>
  </el-row>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ImgMove from "comps/contantComps/imgMove.vue";
import component from "comps/contantComps/imgMove.vue";
export default defineComponent({
  name: "HomeLand",
  components: {
    ImgMove,
  },
  setup() {
    return {
      imgRoutes: [
        "../../src/assets/文件.png",
        "../../src/assets/视频.png",
        "../../src/assets/施工.png",
      ],
    };
  },
});
</script>
<style lang="scss" scoped>
@import "styles/homeLand";
</style>