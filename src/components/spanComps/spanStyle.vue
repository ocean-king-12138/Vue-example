<template>
  <template v-for="(item, index) in obj" :key="index">
    <!-- '--animation': animationType + '', -->
    <span
      :style="{
        '--delay': index * 0.1 + 's',
      }"
      :class="[
        animationType === 'jump' ? 'animation-jump' : '',
        animationType === 'pop' ? 'animation-pop' : '',
        animationType === 'flip' ? 'animation-flip' : '',
        animationType === 'blink' ? 'animation-blink' : '',
      ]"
      >{{ item }}</span
    >
  </template>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "SpanStyle",
  props: {
    spanText: {
      type: String,
      default: "Vue全家桶",
    },
    animationType: {
      type: String,
      default: "jump",
    },
  },
  setup(props) {
    const obj = ref(props.spanText.split(""));
    // console.log(obj);
    const animationType = props.animationType;
    // console.log(animationType);
    return {
      obj,
      animationType,
    };
  },
});
</script>
<style scoped>
span {
  display: inline-block;
  font-size: 50px;
  /* animation: 0.4s jump ease-in-out; */
  animation-name: var(--animation);
  animation-duration: 0.4s;
  animation-timing-function: ease-in-out;
  animation-delay: var(--delay);
  color: #848391;
}
.animation-jump {
  animation-name: jump;
}
.animation-pop {
  animation-name: pop;
}
.animation-flip {
  animation-name: flip;
}
.animation-blink {
  animation-name: blink;
}
@keyframes jump {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}
@keyframes pop {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
}
@keyframes flip {
  0%,
  100% {
    transform: rotateX(0deg);
  }
  50% {
    transform: rotateX(90deg);
  }
}
@keyframes blink {
  0%,
  100% {
    color: inherit;
  }
  50% {
    color: green;
  }
}
</style>