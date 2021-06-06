<template></template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "VueSwitch",
  props: { nameSolt: String },
  setup(props, { slots }) {
    return () => {
      if (slots[props.nameSolt]) return slots[props.nameSolt]();
      if (slots.default) return slots.default();
    };
  },
});
</script>