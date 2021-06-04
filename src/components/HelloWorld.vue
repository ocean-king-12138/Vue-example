<template>
  <checkboxCustom disabled />
  <h1>{{ msg }}</h1>
  <div>{{ data.count }}</div>
  <button @click="stopxx">停止监听</button>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a
      href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
      target="_blank"
    >
      Vetur
    </a>
    or
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    (if using
    <code>&lt;script setup&gt;</code>)
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
// (function () {
//   console.log("12138");
// })();
// (function (win) {
//   (win.functionArray = function () {
//     console.log("123");
//   }),
//     win.functionArray();
//   win.xxx = "1";
//   console.log(win.xxx);
//   console.log(win);
// })(((window as any).functionArray = (window as any).functionArray || {}));
// (window as any).xxx = "2";
// console.log((window as any).xxx);

import {
  ref,
  defineComponent,
  reactive,
  watchEffect,
  getCurrentInstance,
} from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);
    const data = reactive({ count: 0 });
    setInterval(() => {
      data.count++;
    }, 2000);
    const { proxy } = getCurrentInstance();
    console.log(proxy);
    const stopxx = watchEffect(() => {
      console.log(data.count);
    });

    return { count, data, stopxx };
  },
});
</script>

<style scoped>
</style>
