<template>
  <div id="echartsDemo" class="chart-box"></div>
  <div id="echartsDemoTwo" class="chart-box"></div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "VisitAnalysis",
  mounted() {
    this.drawLine();
    this.drawOther();
  },
  methods: {
    drawLine() {
      let elementById = document.getElementById("echartsDemo");
      let echartsDemo = this.$root.echarts.init(elementById);
      let option = {
        title: {
          text: "ECharts 示例",
        },
        tooltip: {},
        legend: {
          data: ["销量"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      };
      echartsDemo.setOption(option);
    },
    drawOther() {
      var chartDom = document.getElementById("echartsDemoTwo");
      var myChart = this.$root.echarts.init(chartDom);
      var option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      };

      myChart.setOption(option);
    },
  },
});
</script>
<style lang="scss" scoped>
.chart-box {
  width: 600px;
  height: 600px;
  display: inline-block;
  margin-right: 50px;
}
</style>