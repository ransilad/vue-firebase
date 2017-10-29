<!-- Plantilla -->
<template>
    <div>
        <template v-if="persona">
            <h1 v-text="datosPersona.nombre"></h1>
            <img :src="datosPersona.foto">
        </template>
        <span v-else="!persona">Cargando Persona</span>
    </div>
</template>

<!-- Controlador -->
<script>
    import axios from 'axios';

    export default {
        mounted() {
            axios.get('https://randomuser.me/api/?results=500').then(response => {
                this.persona = response.data.results[0];
            });
        },
        data() {
            return {
                persona: null
            }
        },
        computed: {
            datosPersona() {
                return {
                    nombre: this.persona.name.first,
                    foto: this.persona.picture.large
                }
            }
        }
    }
</script>

<!-- Estilos -->
<style></style>
