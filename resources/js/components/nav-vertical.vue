<template>
   <div class="nav-side-menu">
        <div class="py-4">
            <center>
         <img src="/img/perfil1.png" class="circulo justify-content-center" alt="Avatar"> 
            </center>
        </div>

    <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
  
        <div class="menu-list">
  
            <ul id="menu-content" class="menu-content collapse out ">
                <li>
                  <router-link class="nav-link" :to="{ path:'/'}">
                   Inicio
                  </router-link>
                </li>
                <li>
                  <router-link class="nav-link" :to="{ path:'/acerca'}">
                  <!--<i class="fa fa-user-circle fa-lg"></i>-->¿Quién soy?
                  </router-link>
                </li>
                <li>
                  <router-link class="nav-link" :to="{ path:'/experiencias'}">
                  Experiencias
                  </router-link>
                </li>
                <li>
                  <router-link class="nav-link" v-on:click="activar" :to="{ path:'/portafolio'}">
                  Portafolio
                  </router-link>
                </li>
                <li>
                  <router-link class="nav-link"  :to="{ path:'/educacion'}">
                  Educación y certificaciones
                  </router-link>
                </li>



            </ul>
     </div>
</div>
</template>
<script>
import animador from '../../../public/js/animador.js';
export default {    
  methods:{
    activar(mensaje){
      console.log("holamundo"+mensaje);
    }
  }
}
</script>

