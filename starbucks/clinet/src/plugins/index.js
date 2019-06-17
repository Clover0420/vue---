import chooseList from "../components/chooseList"
import MyFrame from "@/components/frame"

export default {
    install(Vue) {
        Vue.component("ChooseList", chooseList)
        let Frame = Vue.extend(MyFrame);
        Vue.prototype.$alert = (text) => {
            let ElasticFrame = new Frame({
                propsData: {
                    text
                }
            })
            ElasticFrame.$mount()
            console.log(ElasticFrame.$el)
            document.body.appendChild(ElasticFrame.$el)
        }
    }
}