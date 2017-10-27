import Vue from 'vue'
// import App from './App.vue' // Old
import App from './App_vue_resource.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource);

new Vue({
    el: '#app',
    render: h => h(App) // Old: render: h => h(App)
})
