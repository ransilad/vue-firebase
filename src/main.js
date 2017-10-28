import Vue from 'vue'
// import App from './App.vue'
// import App from './App_vue_resource.vue'
// import VueResource from 'vue-resource'
// Vue.use(VueResource);
import App from './App-modularizada.vue'

import axios from 'axios';

Vue.component('mis-tareas', {
    template: '#plantilla',
    mounted() {
        this.cargarPersonas();
    },
    methods: {
        cargarPersonas() {
            axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
                console.log(response);
                this.tareas = response.data;
            });
        }
    },
    data() {
        return {
            tareas: []
        }
    }
});

new Vue({
    el: '#app',
    render: h => h(App) // Old: render: h => h(App)
});
