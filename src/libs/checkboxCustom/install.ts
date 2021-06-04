import checkboxCustom from "../checkboxCustom/checkboxCustom.vue"
let componentUI = {
    install: (app:any )=> {
        // console.log(options)
        app.component("checkboxCustom",checkboxCustom)
    }
}
export default componentUI