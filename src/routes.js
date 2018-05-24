import Home from './components/Home.vue';
import Contacto from './components/Contacto.vue';
import Usuario from './components/Usuario.vue';
import NoFound from './components/NoFound.vue';
import Persona from './components/Persona.vue';

export const routes = [
    {path: '*', component: NoFound},
    {path: '/', component: Home},
    {path: '/personas', component: Persona},
    {path: '/contacto', component: Contacto, props: {newsletter: true}},
    {path: '/usuario/:username', component: Usuario, name: 'usuario'},
];
