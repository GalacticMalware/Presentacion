<template>
  <div class="container">
    <div class="row justify-content-center py-4">
      <div class="col-12 col-lg-12 py-4">
        <h1 class="display-4 text-primary text-center">Educación universitaria</h1>
        <p
          class="lead text-sencondary text-center"
        >Instituto Tecnológico Nacional de México campus Tuxtla Gutiérrez Chiapas.</p>
      </div>
      <div class="col-10 col-lg-6 py-2" style="margin-bottom:auto;">
        <a href="#uni">
        <img class="img-fluid bm-4 zoom" src="/img/perfil2.jpeg" alt="Quien soy" />
        </a>
      </div>
      <div class="modal" id="uni">
           <div  class="prueba"></div>
          <div class="imagen">
          <a><img src="img/perfil2.jpeg"></a>
        </div>
        <a href="#" class="cerrar text-decoration-none">X</a>
      </div>
    </div>
    <br />
    <br />
    <webcertificado></webcertificado>
    <br />
    <br />
    <appcertificado></appcertificado>
    <br />
    <br />
    <admincertificado></admincertificado>
    <br />
    <br />
    <hackincertificado></hackincertificado>
    <br />
    <br />
    
  </div>
</template>

<script>
import webcertificado from'./Certificacos/Web'
import appcertificado from './Certificacos/Aplicaciones'
import admincertificado from './Certificacos/Administrador'
import hackincertificado from './Certificacos/Hackin'
export default {
  components:{webcertificado,appcertificado,admincertificado,hackincertificado}
};
</script>