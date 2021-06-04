import { createRouter ,createWebHashHistory,RouteRecordRaw} from "vue-router"
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect:"/homeLand"
    },
    {
    path: "/",
    name:"home",
    component: () => import("../views/home.vue"),
    children:[{
        path: "/homeLand",
        name: "homeLand",
        meta:{
            title:"首页",
        },
        component: () => import("../views/homeLand.vue"),
    },{
        path: "/echart",
        name: "echart",
        meta:{
            title:"图表",
        },
        component: () => import("../views/echart.vue"),
    },{
        path: "/dropDownStyle",
        name: "dropDownStyle",
        meta:{
            title:"下拉组件",
        },
        component: () => import("../views/dropDownStyle.vue"),
    }]
}]
const router = createRouter({
    history:createWebHashHistory(),
    routes
})
export default router