import Vue from 'vue'

import './filters'

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import VueNotice from './vue-notice'
Vue.use(VueNotice)



import JsonExcel from 'vue-json-excel'
Vue.component('downloadExcel', JsonExcel)


// Global bus event
Vue.prototype.$bus = new Vue()

