<template>
    <div class="row justify-content-center py-4">
      <div class="col-12 col-lg-12 py-4">
        <h1 class="display-4 text-primary text-center">Desarrollo de aplicaciones web y desarrollo web</h1>
        <p
          class="lead text-sencondary text-center"
        >Cursos en línea con PLATZI y Udemy.</p>
      </div>
      <div class="col-6 col-lg-4 py-2 " style="margin-bottom:auto;">
        <a href="#certificado1">
        <img class="img-fluid bm-4" src="/img/Web/certificado8.png" alt="certificado1" />
        </a>
      </div>
       <div class="col-6 col-lg-4 py-2" style="margin-bottom:auto;">
        <a href="#certificado2">
        <img class="img-fluid bm-4" src="/img/Web/certificado9.png" alt="certificado2" />
        </a>
      </div>

      <div class="modal" id="certificado1">
           <div  class="prueba"></div>
          <div class="imagen">
          <a href="#certificado2" class="text-decoration-none">&#60;</a>
          <a href="#certificado2"><img src="img/Web/certificado8.png"></a>
          <a href="#certificado2" class="text-decoration-none">></a>
        </div>
        <a href="#" class="cerrar text-decoration-none">X</a>
      </div>

      <div class="modal" id="certificado2">
           <div  class="prueba"></div>
          <div class="imagen">
          <a href="#certificado1" class="text-decoration-none">&#60;</a>
          <a href="#certificado1"><img src="img/Web/certificado9.png"></a>
          <a href="#certificado1" class="text-decoration-none">></a>
        </div>
        <a href="#" class="cerrar text-decoration-none">X</a>
      </div>
    </div>
    
</template>
<script>
export default {
}
</script>