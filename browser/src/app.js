import 'babel-polyfill';
import 'fetch-polyfill';
import Vue from 'vue';
import router from './plugins/plugin-router';
import store from './plugins/vuex/plugin-vuex';
import AppRoot from './app.vue';

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(AppRoot)
});