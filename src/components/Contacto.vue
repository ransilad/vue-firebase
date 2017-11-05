<template>
    <section>
        <h2>Hola desde Contacto</h2>
        <template v-if="newsletter">
            <button @click="volverHome">Volver al Home</button>
        </template>
    </section>
</template>

<script>
    export default {
        props: ['newsletter'],
        methods: {
            volverHome() {
                this.$router.push('/')
            }
        }
    };
</script>
