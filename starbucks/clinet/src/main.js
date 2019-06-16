// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./static/scss/common.scss"
import "./utils/flexble";
import "./static/fonts/iconfont.css"
import store from "./store";
import ElementUI from "element-ui";

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
const vm = new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})

window.vm = vm