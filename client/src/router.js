import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './store'

import home from './components/home/router'
import user from './components/user/router'
import chat from './components/chat/router'
import admin from './components/admin/router'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [home, ...user, chat, admin],
})

const getAuth = () => store.getters.auth

router.beforeEach((to, from, next) => {
    // Check Auth
    if (to.meta.auth && !getAuth()) {
        window.localStorage.setItem('route', JSON.stringify(to))
        next({ name: 'auth' })
    } else {
        to.name == 'auth' ? next() : window.localStorage.removeItem('route')
        next()
    }

    if (!to.meta.title) document.title = to.meta.name
})

export default router