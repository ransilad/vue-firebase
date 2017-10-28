<template>
    <div id="app">
        <slots-component>
            <template slot="header">Header 1</template>
            <template>Contenido 1</template>
            <template slot="footer">Footer 1</template>
        </slots-component>

        <slots-component>
            <template slot="header">Header 2</template>
            <template>Contenido 2</template>
            <template slot="footer">Footer 2</template>
        </slots-component>

        <slots-component>
            <template slot="header">Header 2</template>
            <template slot="footer">Footer 2</template>
        </slots-component>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>
