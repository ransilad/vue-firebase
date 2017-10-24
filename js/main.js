Vue.config.devtools = true

const vm = new Vue({
    el: 'main',
    data: {
        message: 'Hola mundo',
        conectado: true,
        dias: [
            {name: 'Lunes'},
            {name: 'Martes'}
        ],
        newTask: '',
        tareas: [
            'Apreder Vue',
            'Aprender Flask',
            'Aprender Linux'
        ]
    },
    methods: {
        agregarTarea() {
            this.tareas.unshift(this.newTask);
            this.newTask = '';
        }
    }
});
