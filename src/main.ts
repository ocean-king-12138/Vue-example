import { createApp } from 'vue'
import App from './App.vue'
import install from "./libs/checkboxCustom/install"
//@ts-ignore
import router from '/@/router'
//@ts-ignore
import store from "/@/store"
import "styles/index.scss"
//@ts-ignore
import element from "plugins/element-plus"
import * as echarts from "echarts"
const app = createApp(App)
app.config.globalProperties.echarts = echarts;
app.use(install).use(router).use(element).use(store).mount('#app')



