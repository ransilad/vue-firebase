<template>
    <div id="app">
        <button @click="mostrar = true">Mostrar</button>
        <slots-component @ocultar="mostrar = false" v-show="mostrar" :tareas="tareas">
            <template slot="header">Header 1</template>
            <template slot-scope="props"><li>{{ props.title}} </li></template>
            <template slot="footer">Footer 1</template>
        </slots-component>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                tareas: [
                    {title: 'Tarea 1'},
                    {title: 'Tarea 2'},
                    {title: 'Tarea 3'},
                    {title: 'Tarea 4'}
                ],
                mostrar: false
            }
        }
    }
</script>
