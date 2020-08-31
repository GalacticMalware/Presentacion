import Vue from 'vue'
import Router from 'vue-router'

//import Contacto from './components/Complementos/Contacto'
import Acerca from "./components/Complementos/Acerca";
import Inicio from "./components/Inicio"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "*",
            redirect: "/"
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
        }
    ],
    mode: "history"
})
