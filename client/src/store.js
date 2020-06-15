import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

import user from './components/user/store'
import chat from './components/chat/store'

export const vuexLocal = new VuexPersistence({
    key: 'vuex',
    storage: window.localStorage,
})

const store = new Vuex.Store({
    state: {},
    modules: {
        ...user,
        chat
    },
    plugins: [vuexLocal.plugin],
})

export default store