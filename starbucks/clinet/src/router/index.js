import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: "/home",
        meta: {
            title: "加班/休假"
        },
        component: () =>
            import ("@/views/Home")
    }, {
        path: "/filtertypes",
        meta: {
            title: "筛选"
        },
        component: () =>
            import ("@/views/Filtertypes")
    }, {
        path: "/login",
        meta: {
            title: "登陆"
        },
        component: () =>
            import ("@/views/Login")
    }, {
        path: "/search",
        meta: {
            title: "搜索"
        },
        component: () =>
            import ("@/views/Search")
    }, {
        path: "/onfile/:type",
        meta: {
            title: "提交填表"
        },
        name: "onfile",
        props: true,
        component: () =>
            import ("@/views/Onfile")
    }, {
        path: "/detail/:type/:id",
        meta: {
            title: "详情"
        },
        props: true,
        name: "detail",
        component: () =>
            import ("@/views/Detail")
    }, {
        path: "/history/:id",
        meta: {
            title: "审批历史"
        },
        props: true,
        name: "history",
        component: () =>
            import ("@/views/History")
    }]
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
})

export default router