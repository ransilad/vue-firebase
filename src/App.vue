<template>
    <div id="app">
        <img src="./assets/logo.png">
        <h1>{{ msg }}</h1>
        <form v-on:submit.prevent="agregarTarea">
            <input type="text" v-model="newTask">
            <input type="submit" value="Agregar">
        </form>
        <ul>
            <li v-for="(tarea, index) in tareas">
                {{ index }}: {{ tarea }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                newTask: '',
                tareas: [
                    'Apreder Vue',
                    'Aprender Flask',
                    'Aprender Linux'
                ]
            }
        },
        methods: {
            agregarTarea() {
                this.tareas.unshift(this.newTask);
                this.newTask = '';
            }
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
