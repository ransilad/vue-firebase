import Vue from 'vue'
// import App from './App.vue'
// import App from './App_vue_resource.vue'
// import App from './App-modularizada.vue'
// import VueResource from 'vue-resource'
// Vue.use(VueResource);
import App from './Slots.vue'

// import axios from 'axios';

Vue.component('slots-component', {
    props: ['tareas'],
    template: '#slots',
    methods: {
        ocultarWidget() {
            this.$emit('ocultar');
        }
    }
});

new Vue({
    el: '#app',
    render: h => h(App) // Old: render: h => h(App)
});
