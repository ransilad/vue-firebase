import Vue from 'vue'
import VueRouter from 'vue-router';
import {routes} from './routes';
import App from './App.vue'
import {store} from './store.js';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    console.log('Acceso a ruta');
    next(store.state.auth);
});

new Vue({
    el: 'main',
    router,
    store,
    render: h => h(App)
});
