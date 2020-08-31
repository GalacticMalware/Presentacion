<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-6">
        <h1 class="display-4 text-primary text-center py-4">Daniel Alejandro Morales Gómez</h1>
        <p class="lead text-secondary text-center ">Ing. Sistemas Computacionales</p>
        <router-link
          :to="{ path:'/portafolio'}"
          class="btn btn-lg btn-block btn-outline-primary"
        >Portafolio</router-link>
        <div class="justify-content-center row social-menu ">
          <ul>
            
            <li>
              <a href="https://github.com/GalacticMalware" class="fa fa-github nav-link"></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/daniel-alejandro-morales-gomez-11aab4191" class="fa fa-linkedin-square nav-link"></a>
            </li>
            <li>
              <router-link :to="{path:'/'}" class="fa fa-instagram nav-link"></router-link>
            </li>
            <li>
              <router-link :to="{path:'/'}" class="fa fa-facebook-square nav-link"></router-link>
            </li>
            <li>
              <router-link :to="{path:'/'}" class="fa fa-envelope-o nav-link"></router-link>
            </li>
            
          </ul>
        </div>
      </div>

      <div class="col-12 col-lg-6 py-4">
        <img class="img-fluid mb-4" src="/img/home.svg" alt="Desarrollo" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>