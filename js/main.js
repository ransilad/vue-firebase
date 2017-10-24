Vue.config.devtools = true

const vm = new Vue({
    el: 'main',
    data: {
        message: 'Hola mundo',
        conectado: true,
        dias: [
            {name: 'Lunes'},
            {name: 'Martes'}
        ]
    }
});