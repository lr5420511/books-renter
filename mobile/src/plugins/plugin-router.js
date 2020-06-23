import Vue from 'vue';
import VueRouter from 'vue-router';

import ViewMain from '../views/view-main.vue';
// import more views to here!

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/',
            redirect: '/main'
        },
        {
            path: '/main',
            component: ViewMain,
            children: [
                
            ]
        }
    ]
});