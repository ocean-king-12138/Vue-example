import { createStore } from "vuex"
const store = createStore({
    state: {
        collapse: false,
        staticList: [
            {
                title: "系统首页",
                index: "homeLand",
                icon: "el-icon-ship",
                translation: "",
                meta: {
                    
                }
            },
            {
                title: "组件",
                index: "page1",
                icon: "el-icon-burger",
                translation: "",
                meta: {
                    
                },
                subs: [
                    {
                        title: "图表",
                        index: "echart",
                        icon: "el-icon-burger",
                        translation: "",
                        meta: {
                            
                        },
                    },
                    {
                        title: "下拉组件",
                        index: "dropDownStyle",
                        icon: "el-icon-burger",
                        translation: "",
                        meta: {
                            
                        },
                    },
                   
                ]
            }

        ],
        tagsList:[]
    },
    getters: {
        
    },
    mutations: {
        ChangeCollapse(state,data) {
            state.collapse = data;
            console.log(state.collapse)
        },
        SetTags(state,data) {
            state.tagsList.push(data)
        },
        CloseTags(state, data) {
            state.tagsList.splice(data.index,1)
        }
        
    },
    actions: {
        
    }
});
export default store;