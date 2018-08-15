import Vue from 'vue'
import VueRouter from 'vue-router'

// import modules
import error from './modules/error'
import demo from './modules/demo'
import table from './modules/table'
import form from './modules/form'
import user from './modules/user'



Vue.use(VueRouter)

let routes = [
    { path: '/', redirect: '/login' },
    { path: '*', redirect: '/404', hidden: true }
]
const router = new VueRouter({
    routes: routes
        .concat(error)
        .concat(demo)
        .concat(table)
        .concat(form)
        .concat(user)
})

router.beforeEach((to, from, next) => {
    next()
    // remove loading
    let $loading = document.querySelector('#appPageLoading')
    if ($loading) {
        document.body.removeChild($loading)
    }
})

export default router
