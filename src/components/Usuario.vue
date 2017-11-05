<template>
    <section>
        {{ username }}
    </section>
</template>
<script>
    export default {
        data() {
            return {
                username: this.$route.params.username
            }
        },
        watch: {
            '$route'(to, from) {
                console.log(to);
                if (to.params.username !== from.params.username) {
                    this.username = to.params.username;
                }
            }
        }
    }
</script>
