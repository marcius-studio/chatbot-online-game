import Vue from 'vue'

import router from './router'
import store from './store'
import {apolloProvider} from './graphql'

import App from './components/App.vue'

// Styles
import 'material-icons'
import './static/main.scss'

import './plugins'

new Vue({
    el: '#app',
    router,
    store,
    apolloProvider,
    render: h => h(App),
})