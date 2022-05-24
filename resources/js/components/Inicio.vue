<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-6">
        <h1 class="display-4 text-primary text-center py-4">Daniel Alejandro Morales Gómez</h1>
        <p class="lead text-secondary text-center ">Ingeniero en Sistemas Computacionales</p>
        <p class="lead text-secondary text-center ">Web developer. </> Administrador de servidores Linux </><br /> Java developer.</p> 
        <router-link
          :to="{ path:'/portafolio'}"
          class="btn btn-lg btn-block btn-outline-primary"
        >Portafolio</router-link>
        <div class="justify-content-center row social-menu ">
          <ul>
            
            <li>
              <a href="https://github.com/GalacticMalware" target="_bank" class="fa fa-github nav-link"></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/daniel-alejandro-morales-gomez-11aab4191" target="_bank" class="fa fa-linkedin-square nav-link"></a>
            </li>
            <li>
              <a href="mailto: daniel_mg_97@hotmail.com" tag="_bank" class="fa fa-envelope-o nav-link"></a>
            </li>
            
          </ul>
        </div>
      </div>

      <div class="col-12 col-lg-6 py-4">
        <img class="img-fluid mb-4" src="/img/home.svg" alt="Desarrollo" />
      </div>
    </div>



<!-- Modal -->
<div class="modal fade" id="nota" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Actualización de la pagina</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Disculpe las molestias, lo que verá a continuación será información obsoleta de esta página.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        
      </div>
    </div>
  </div>
</div>


    
  </div>
</template>

<script>

export default {
mounted(){
  $('#nota').modal('show')
}
};

</script>