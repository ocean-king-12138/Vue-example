<template>
  <div class="dropDown-list">
    <input
      class="input-style"
      type="text"
      placeholder="请选择"
      :style="{
        height: heightNum + 'px',
        width: widthNum + 'px',
      }"
      @click="showList"
      :value="inputValue"
    />
    <div class="ul-box">
      <transition name="slide-fade">
        <ul v-show="isShow">
          <li
            v-for="(item, index) in dropDownLists"
            :key="index"
            @click="fillInput(item)"
            :style="{
              height: heightNum + 'px',
              width: widthNum + 'px',
              'background-color': backgroundColor,
            }"
          >
            {{ item.text }}
          </li>
        </ul>
      </transition>
    </div>
  </div>
  <transition name="fade">
    <div class="mask" v-show="isShow"></div>
  </transition>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "DropDown",
  props: {
    width: {
      type: String,
      default: "200",
    },
    height: {
      type: String,
      default: "30",
    },
    color: {
      type: String,
      default: "#eee",
    },
    dropDownLists: {
      type: Array,
      required: true,
      default: [
        {
          text: "尚未传入",
          value: 0,
        },
      ],
    },
  },
  setup(props) {
    const styleDrop = {
      widthNum: props.width,
      heightNum: props.height,
      backgroundColor: props.color,
      dropDownLists: props.dropDownLists,
      isShow: ref(false),
      inputValue: ref(""),
    };
    const meoths = {
      showList: () => {
        styleDrop.isShow.value = !styleDrop.isShow.value;
      },
      fillInput: (item) => {
        meoths.showList();
        styleDrop.inputValue.value = item.text;
      },
    };

    return {
      ...styleDrop,
      ...meoths,
    };
  },
});
</script>
<style scoped>
ul li {
  padding: 0;
  list-style: none;
  border: 1px solid rgb(68, 66, 66);
  margin: 2px 0;
}
input,
ul li {
  border-radius: 5px;
  user-select: none;
}
.ul-box {
  position: absolute;
}
.dropDown-list {
  position: relative;
  z-index: 6;
}
.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  opacity: 0.5;
  z-index: 5;
}
.input-style {
  background: white;
  transition: background 0.25s ease-in;
}

.input-style:hover {
  background: #3c81d1;
  transition: background 0.35s ease-out;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
  /* margin-left: 10px; */
}
</style>>

