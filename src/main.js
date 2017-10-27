import Vue from 'vue'
// import App from './App.vue'
// import App from './App_vue_resource.vue'
import App from './App-modularizada.vue'
// import VueResource from 'vue-resource'
// Vue.use(VueResource);

Vue.component('mis-tareas', {
    props: ['tareas'],
    template: `<ul><li v-for="tarea in tareas" v-text="tarea.title"></li></ul>`
});

new Vue({
    el: '#app',
    render: h => h(App) // Old: render: h => h(App)
});
