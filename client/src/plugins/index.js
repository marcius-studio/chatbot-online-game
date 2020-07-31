import Vue from 'vue'

import './filters'

import VueNotice from '@marcius-studio/vue-notice'
Vue.use(VueNotice)

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import JsonExcel from 'vue-json-excel'
Vue.component('downloadExcel', JsonExcel)


// Global bus event
Vue.prototype.$bus = new Vue()

