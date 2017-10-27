<template>
    <div id="app">
        <h1>{{ msg }}</h1>
        <img v-for="user in users" :src="user.picture.thumbnail" :alt="user.name.first">
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'app',
        mounted() {
            this.cargarPersonas();
        },
        methods: {
            cargarPersonas() {
                axios.get('https://randomuser.me/api/?results=500').then(response => {
                    console.log(response);
                    this.users = response.data.results;
                });
            }
        },
        data() {
            return {
                msg: 'Welcome to Vue resource',
                users: []
            }
        }
    }
</script>
