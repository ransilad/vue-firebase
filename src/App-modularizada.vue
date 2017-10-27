<template>
    <div id="app">
        <mis-tareas :tareas="tareasAjax"></mis-tareas>
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
                axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
                    console.log(response);
                    this.tareasAjax = response.data;
                });
            }
        },
        data() {
            return {
                tareasAjax: []
            }
        }
    }
</script>
