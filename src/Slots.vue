<template>
    <div id="app">
        <slots-component :tareas="tareas">
            <template slot="header">Header 1</template>
            <template slot-scope="props"><li>{{ props.title}} </li></template>
            <template slot="footer">Footer 1</template>
        </slots-component>

        <slots-component :tareas="tareas">
            <template slot="header">Header 2</template>
            <template slot-scope="props"><p>{{ props.title}} </p></template>
            <template slot="footer">Footer 2</template>
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
                ]
            }
        }
    }
</script>
