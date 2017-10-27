<template>
    <div id="app">
        <h1>{{ msg }}</h1>
        <img v-for="user in users" :src="user.picture.thumbnail" :alt="user.name.first">
    </div>
</template>

<script>
    export default {
        name: 'app',
        mounted() {
            this.cargarPersonas();
        },
        methods: {
            cargarPersonas() {
                this.$http.get('https://randomuser.me/api/?results=500').then(response => {
                    console.log(response);
                    this.users = response.body.results;
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
