
require('./bootstrap');

import Vue from 'vue'
import App from './components/App.vue';
import Routers from './Route';

//window.Vue = require('vue');


const app = new Vue({
    el: '#app',
    components:App,
    router: Routers,
    render: h => h(App),
});

export default app;