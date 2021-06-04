<template>
  <!-- <div>全局组件</div> -->
  <div class="o_wrap">
    <input type="button" class="o_input" />
    <div
      class="o_checkbox"
      :class="{ o_checkbox_disabled: isDisabled }"
      @click="checkboxBtn"
    >
      <i
        class="o_checkbox_i iconfont icon-check"
        :class="isTouch === 1 ? 'o_checkbox_i_in' : 'o_checkbox_i_out'"
      ></i>
      <span class="o_checkbox_span">复选框</span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "checkboxCustom",
  props: {
    disabled: Boolean,
  },
  setup(props) {
    let isTouch = ref(0);
    let isDisabled = ref(false);
    isDisabled.value = props.disabled;
    let methodsObj = {
      checkboxBtn() {
        if (isTouch.value === 0) {
          isTouch.value = 1;
        } else {
          isTouch.value = 0;
        }
      },
    };
    return {
      ...methodsObj,
      isTouch,
      isDisabled,
    };
  },
});
</script>
<style lang="less" scoped>
.o_wrap {
  width: 100px;
  margin: 0 auto;
  position: relative;
}
.o_input {
  width: 100px;
  height: 32px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 9;
  border: 0;
  cursor: no-drop;
}
.o_checkbox {
  width: 100px;
  height: 50px;
  margin: 0 auto;
  cursor: pointer;
}
.o_checkbox i.o_checkbox_i {
  width: 30px;
  height: 30px;
  background: #333;
  border-radius: 100%;
  float: left;
  border: 1px solid #666;
}
.o_checkbox i.o_checkbox_i_in {
  background: #1519bc;
}
.o_checkbox i.o_checkbox_i_out {
  background: white;
}
.o_checkbox span.o_checkbox_span {
  float: left;
  user-select: none;
  margin: 5px 0px 5px 5px;
  size: 18px;
}
@font-face {
  font-family: "iconfont"; /* Project id 2571728 */
  src: url("//at.alicdn.com/t/font_2571728_qkg1nqnyi18.woff2?t=1621995862301")
      format("woff2"),
    url("//at.alicdn.com/t/font_2571728_qkg1nqnyi18.woff?t=1621995862301")
      format("woff"),
    url("//at.alicdn.com/t/font_2571728_qkg1nqnyi18.ttf?t=1621995862301")
      format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  line-height: 30px;
}

.icon-check:before {
  content: "\e6bc";
}
.o_checkbox_disabled {
}
.o_checkbox_disabled i.o_checkbox_i {
  background: #eee;
  border: 1px solid #eee;
}
.o_checkbox_disabled span.o_checkbox_span {
  color: #eee;
}
</style>