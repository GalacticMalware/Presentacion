<template>
    <div class="row justify-content-center py-4">
      <div class="col-12 col-lg-12 py-4">
        <h1 class="display-4 text-primary text-center">Administrador de servidores LINUX y redes</h1>
        <p
          class="lead text-sencondary text-center"
        >Cursos en línea con PLATZI y CISCO ACADEMY presenciales.</p>
      </div>
      <div class="col-6 col-lg-4 py-2" style="margin-bottom:auto;">
          <a href="#certificado4">
        <img class="img-fluid bm-4 zoom" src="/img/Redes/certificado1.png" alt="certificado1" />
        </a>
      </div>
       <div class="col-6 col-lg-4 py-2" style="margin-bottom:auto;">
            <a href="#certificado5">
        <img class="img-fluid bm-4 zoom" src="/img/Redes/certificado2.png" alt="certificado2" />
            </a>
      </div>
      <div class="col-6 col-lg-4 py-2" style="margin-bottom:auto;">
         <a href="#certificado6">
        <img class="img-fluid bm-4 zoom" src="/img/Redes/certificado3.png" alt="certificado1" />
         </a>
      </div>
       <div class="col-6 col-lg-4 py-2" style="margin-bottom:auto;">
         <a href="#certificado7">
        <img class="img-fluid bm-4 zoom" src="/img/Redes/certificado4.jpeg" alt="certificado2" />
         </a>
      </div>
      <div class="col-6 col-lg-4 py-2" style="margin-bottom:auto;">
         <a href="#certificado8">
        <img class="img-fluid bm-4 zoom" src="/img/Redes/certificado5.jpeg" alt="certificado2" />
         </a>
      </div>

      <div class="modal" id="certificado4">
          <div class="prueba"></div>
          <div class="imagen">
              <a href="#certificado7" class="text-decoration-none">&#60;</a>
              <a href="#certificado5"><img src="/img/Redes/certificado1.png"></a>
              <a href="#certificado5" class="text-decoration-none">></a>
          </div>
          <a href="#" class="cerrar text-decoration-none">X</a>
      </div>

      <div class="modal" id="certificado5">
          <div class="prueba"></div>
          <div class="imagen">
              <a href="#certificado4" class="text-decoration-none">&#60;</a>
              <a href="#certificado6"><img src="/img/Redes/certificado2.png"></a>
              <a href="#certificado6" class="text-decoration-none">></a>
          </div>
          <a href="#" class="cerrar text-decoration-none">X</a>
      </div>

        <div class="modal" id="certificado6">
          <div class="prueba"></div>
          <div class="imagen">
              <a href="#certificado5" class="text-decoration-none">&#60;</a>
              <a href="#certificado7"><img src="/img/Redes/certificado3.png"></a>
              <a href="#certificado7" class="text-decoration-none">></a>
          </div>
          <a href="#" class="cerrar text-decoration-none">X</a>
      </div>

      <div class="modal" id="certificado7">
          <div class="prueba"></div>
          <div class="imagen">
              <a href="#certificado6" class="text-decoration-none">&#60;</a>
              <a href="#certificado8"><img src="/img/Redes/certificado4.jpeg"></a>
              <a href="#certificado8" class="text-decoration-none">></a>
          </div>
          <a href="#" class="cerrar text-decoration-none">X</a>
      </div>
      <div class="modal" id="certificado8">
          <div class="prueba"></div>
          <div class="imagen">
              <a href="#certificado7" class="text-decoration-none">&#60;</a>
              <a href="#certificado4"><img src="/img/Redes/certificado5.jpeg"></a>
              <a href="#certificado4" class="text-decoration-none">></a>
          </div>
          <a href="#" class="cerrar text-decoration-none">X</a>
      </div>

    </div>
    
</template>
<script>
export default {
    
}
</script>