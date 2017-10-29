import Vue from 'vue'

import axios from 'axios';

Vue.component('users', {
    template: '#users-template',
    mounted() {
        axios.get('https://randomuser.me/api/?results=500').then(response => {
            this.users = response.data.results.map((usr) => {
                return {
                    nombre: usr.name.title + ' ' + usr.name.first,
                    correo: usr.email,
                    foto: usr.picture.medium
                }
            });;
        });
    },
    data() {
        return {
            users: [],
            query: ''
        }
    },
    computed: {
        filterUsers() {
            return this.users.filter((user) => {
                return user.nombre.includes(this.query);
            });
        }
    }
});

Vue.component('user', {
    props: ['datos'],
    template: '#single-user'
});

new Vue({
    el: 'main',
    // render: h => h(App)
});
