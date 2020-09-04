import Vue from 'vue'
import Router from 'vue-router'

//import Contacto from './components/Complementos/Contacto'
import Acerca from "./components/Complementos/Acerca";
import Inicio from "./components/Inicio"
import Experiencias from './components/Complementos/Experiencias'
import Portafolio from './components/Complementos/Portafolio/Portafolio'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "*",
            redirect: "/"
        },
        {
            path: '/portafolio',
            name: 'portafolio',
            component: Portafolio
        },
        {
            path: '/',
            name: 'inicio',
            component: Inicio,
        },
        {
            path: "/acerca",
            name: "acerca",
            component: Acerca
        },
        {
             path: "/experiencias",
             name: "experiencias",
             component: Experiencias
        }
    ],
    mode: "history"
})
