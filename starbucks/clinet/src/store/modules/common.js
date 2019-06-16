import api from "@/api";
export default {
    namespaced: true,
    state: {

    },
    actions: {
        takeAction() {
            api.isLogin().then(res => {
                return res.data.data
            }).catch(error => {
                console.log(error)
            })
        }
    },
    mutations: {

    }
}