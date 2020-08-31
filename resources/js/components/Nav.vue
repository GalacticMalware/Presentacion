<template>
<div>
    <meta name="viewport" content="width=device-width, initial-scale=1">


<nav class="navbar navbar-light navbar-expand-lg bg-white shadow-sm">
    <div class="container">
       
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="nav nav-pills">
                <li class="nav-item"><router-link class="nav-link" :to="{ path:'/'}">Inicio</router-link></li>
                <li class="nav-item"><router-link class="nav-link" :to="{ path:'/acerca'}">¿Quién soy?</router-link></li>
                <li class="nav-item"><router-link class="nav-link" :to="{ path:'/experiencias'}">Experiencias</router-link></li>
                <li class="nav-item"><router-link class="nav-link" :to="{ path:'/portafolio'}">Portafolio</router-link></li>
            </ul>
        </div>
    </div>
</nav>
</div>
</template>
<script>
export default {
    
}
</script>