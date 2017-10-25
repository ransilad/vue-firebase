<template>
    <div id="app">
        <h1>{{ msg }}</h1>
        <form v-on:submit.prevent="agregarTarea">
            <input type="text" v-model="newTask">
            <input type="submit" value="Agregar">
        </form>
        <ul>
            <li v-for="tarea in tareasPermitidas">
                {{ tarea.titulo }}
            </li>
        </ul>
        <br />
        <ul>
            <li v-for="tarea in tareasPorAntiguedad">
                {{ tarea.titulo }}
            </li>
        </ul>
        <br />
        <input type="range" min="0" max="10" v-model="minimo">
        <br />
        <ul>
            <li v-for="juego in mejoresJuegos">
                {{ juego.titulo }}
            </li>
        </ul>
        <br />
        <input type="search" v-model="busqueda">
        <br />
        <ul>
            <li v-for="juego in buscarJuego">
                {{ juego.titulo }}
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
                    {
                        titulo: 'Aprender Vue',
                        prioridad: true,
                        antiguedad: 133
                    },
                    {
                        titulo: 'Aprender Flask',
                        prioridad: true,
                        antiguedad: 150
                    },
                    {
                        titulo: 'Aprender Firebase',
                        prioridad: false,
                        antiguedad: 20
                    }
                ],
                minimo: 2,
                busqueda: '',
                juegos: [
                    {
                        titulo: 'Titulo 1',
                        genero: 'Genero 1',
                        puntuacion: 10
                    },
                    {
                        titulo: 'Titulo 2',
                        genero: 'Genero 2',
                        puntuacion: 7
                    },
                    {
                        titulo: 'Titulo 3',
                        genero: 'Genero 3',
                        puntuacion: 2
                    }
                ]
            }
        },
        methods: {
            agregarTarea() {
                this.tareas.unshift(this.newTask);
                this.newTask = '';
            }
        },
        computed: {
            tareasPermitidas() {
                return this.tareas.filter((tarea) => tarea.prioridad);
            },
            tareasPorAntiguedad() {
                return this.tareas.sort((a, b) => b.antiguedad - a.antiguedad);
            },
            mejoresJuegos() {
                return this.juegos.filter((juego) => juego.puntuacion >= this.minimo);
            },
            buscarJuego() {
                return this.juegos.filter((juego) => juego.titulo.includes(this.busqueda));
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
    }

    a {
        color: #42b983;
    }
</style>
