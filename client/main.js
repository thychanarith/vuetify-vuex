import Vue from 'vue';
import App from './App.vue';
import './main.html';

import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
})

//vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//vee validate
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

//router
import VueRouter from 'vue-router'
import routes from './route'
const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})
Vue.use(VueRouter)

import {
  store
} from './store/store.js'
//======================================
Meteor.startup(()=>{
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('app')
})