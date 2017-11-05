<template>
    <section>
        <h1>Rutas con Vue Router</h1>
        <router-link to="/">Home</router-link>
        <router-link to="/contacto">Contacto</router-link>
        <router-link :to="{name: 'usuario', params: {username: 'ransilad'}}">Usuario</router-link>
        <button @click="cambiar">Cambiar auth</button>
        <hr>
        <router-view></router-view>
    </section>
</template>

<script>
    import {mapMutations} from 'vuex';
    export default {
        methods: mapMutations(['cambiar'])
    }
</script>
