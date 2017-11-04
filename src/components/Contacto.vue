<template>
    <section>
        <h2>Hola desde Contacto</h2>
        <button @click="volverHome">Volver al Home</button>
    </section>
</template>

<script>
    export default {
        methods: {
            volverHome() {
                this.$router.push('/')
            }
        }
    };
</script>
