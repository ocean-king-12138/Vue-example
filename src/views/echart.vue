<template>
  <VisitAnalysis></VisitAnalysis>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import VisitAnalysis from "comps/echartComps/VisitAnalysis.vue";
export default defineComponent({
  name: "page1",
  components: {
    VisitAnalysis,
  },
});
</script>