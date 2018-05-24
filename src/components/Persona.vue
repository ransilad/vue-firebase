<!-- Plantilla -->
<template>
    <div>
        <template v-if="persons">
            <div v-for="person in persons">
                <h1 v-text="person.data.destination"></h1>
                <h5 v-text="person.data.duration"></h5>
            </div>
        </template>
        <span v-else="!persons">Cargando Persona</span>
    </div>
</template>

<!-- Controlador -->
<script>
    import axios from 'axios';

    export default {
        mounted() {
            axios.get('https://api.voyhoy.com/v3/tickets/data/?id=1522870349380-exkwvg').then(response => {
                console.log(response.data);
                this.persons = response.data;
            });
        },
        data() {
            return {
                persons: null
            }
        }
    }
</script>

<!-- Estilos -->
<style></style>
