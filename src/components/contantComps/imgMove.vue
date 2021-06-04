<template>
  <div class="img-contant">
    <img :src="imgUrl" alt="嘻嘻" class="img-style" height="400" width="700" />
    <ul class="img-ul">
      <template v-for="(item, index) in imgRoutes" :key="index">
        <li class="img-ul-li" @click="ChangeImg(index)"></li>
      </template>
    </ul>

    <span class="left-span" @click="lastImg">
      <i class="iconfont icon-jiantou"></i>
    </span>
    <span class="right-span" @click="nextImg">
      <i class="iconfont icon-jiantou-copy"></i>
    </span>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "ImgMove",
  props: {
    imgRoutes: {
      type: Array,
      required: true,
    },
  },
  methods: {
    ChangeImg(index) {
      this.imgUrl = this.imgRoutes[index];
    },
  },
  setup(props) {
    console.log(props.imgRoutes[0]);
    const imgUrl = ref(props.imgRoutes[0]);
    let index = 0;
    setInterval(() => {
      imgUrl.value = props.imgRoutes[index++].toString();
      if (index == 3) index = 0;
    }, 5000);
    const methodsTo = {
      nextImg: () => {
        let num = props.imgRoutes.indexOf(imgUrl.value);
        console.log(imgUrl.value);
        console.log(num);
        if (num == 0 || num) {
          num == 2 ? (num = 0) : num++;
          imgUrl.value = props.imgRoutes[num];
        }
      },
      lastImg: () => {
        let num = props.imgRoutes.indexOf(imgUrl.value);
        if (num == 0 || num) {
          num == 0 ? (num = 2) : num--;
          imgUrl.value = props.imgRoutes[num];
        }
      },
    };
    return {
      imgUrl,
      imgRoutes: props.imgRoutes,
      ...methodsTo,
    };
  },
});
</script>
<style lang="scss" scoped>
.img-contant {
  position: relative;
  display: inline-block;
  height: auto;
  width: auto;
}
.img-style {
  display: block;
}
.img-ul {
  position: absolute;
  bottom: 5px;
  left: 50%;
  margin-left: -23px;
}
.img-ul-li {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid #666;
  cursor: pointer;
}
.img-ul-li {
  margin-left: 5px;
}
.img-ul-li:first-child {
  margin-left: 0px;
}
.left-span {
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -10px;
  width: 20px;
  height: 25px;
  line-height: 25px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  opacity: 0.1;
  border: 2px solid black;
  cursor: pointer;
}
.right-span {
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -10px;
  width: 20px;
  height: 25px;
  line-height: 25px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  opacity: 0.1;
  border: 2px solid black;
  cursor: pointer;
}
@font-face {
  font-family: "iconfont"; /* Project id 2571728 */
  src: url("//at.alicdn.com/t/font_2571728_gytftf7mb7.woff2?t=1622592022180")
      format("woff2"),
    url("//at.alicdn.com/t/font_2571728_gytftf7mb7.woff?t=1622592022180")
      format("woff"),
    url("//at.alicdn.com/t/font_2571728_gytftf7mb7.ttf?t=1622592022180")
      format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-jiantou:before {
  content: "\e663";
}

.icon-jiantou-copy:before {
  content: "\e664";
}
</style>