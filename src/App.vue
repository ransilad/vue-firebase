<template>
    <div id="app">
        <transition appear name="fade">
            <h1 v-if="mostrar">{{ msg }}</h1>
        </transition>
        <br />
        <!-- Animate.css -->
        <transition appear
                name="animate-css"
                enter-active-class="animated rotateInUpLeft"
                leave-active-class="animated zoomOutUp">
            <h1 v-if="mostrar">{{ msg }}</h1>
        </transition>
        <br />
        <button @click="mostrar = !mostrar;">Mostrar / Ocultar</button>
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
            <li v-bind:class="{completado: tarea.prioridad}" v-for="tarea in tareasPorAntiguedad">
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
                mostrar: true,
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
                this.tareas.push({titulo: this.newTask, prioridad: false, antiguedad: 100});
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

    .completado {
        text-decoration: line-through;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s
    }
    .fade-enter, .fade-leave-to {
        opacity: 0
    }
</style>
