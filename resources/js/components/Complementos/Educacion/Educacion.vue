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
        <img class="img-fluid bm-4" src="/img/perfil2.jpeg" alt="Quien soy" />
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
    <div class="row justify-content-center py-4">
      <div class="col-12 col-lg-12 py-4">
        <h1 class="display-4 text-primary text-center">Administrador de servidores LINUX y redes</h1>
        <p
          class="lead text-sencondary text-center"
        >Cursos en línea con PLATZI y CISCO ACADEMY presenciales.</p>
      </div>
      <div class="col-6 col-lg-4 py-2" style="margin-bottom:auto;">
        <img class="img-fluid bm-4" src="/img/Redes/certificado1.png" alt="certificado1" />
      </div>
       <div class="col-6 col-lg-4 py-2" style="margin-bottom:auto;">
        <img class="img-fluid bm-4" src="/img/Redes/certificado2.png" alt="certificado2" />
      </div>
      <div class="col-6 col-lg-4 py-2" style="margin-bottom:auto;">
        <img class="img-fluid bm-4" src="/img/Redes/certificado3.png" alt="certificado1" />
      </div>
       <div class="col-6 col-lg-4 py-2" style="margin-bottom:auto;">
        <img class="img-fluid bm-4" src="/img/Redes/certificado2.png" alt="certificado2" />
      </div>
    </div>
    <br />
    <br />
    <div class="row justify-content-center py-4">
      <div class="col-12 col-lg-12 py-4">
        <h1 class="display-4 text-primary text-center">Certificados Hacking Ético</h1>
        <p
          class="lead text-sencondary text-center"
        >Cursos en línea con PLATZI y Netacad (CISCO).</p>
      </div>
      <div class="col-6 col-lg-4 py-2" style="margin-bottom:auto;">
        <img class="img-fluid bm-4" src="/img/Hacking/certificado1.png" alt="certificado1" />
      </div>
       <div class="col-6 col-lg-4 py-2" style="margin-bottom:auto;">
        <img class="img-fluid bm-4" src="/img/Hacking/certificado2.png" alt="certificado2" />
      </div>
      <div class="col-6 col-lg-4 py-2" style="margin-bottom:auto;">
        <img class="img-fluid bm-4" src="/img/Hacking/certificado3.png" alt="certificado3" />
      </div>
      <div class="col-6 col-lg-4 py-2" style="margin-bottom:auto;">
        <img class="img-fluid bm-4" src="/img/Hacking/certificado5.png" alt="Certificado4" />
      </div>
      <div class="col-6 col-lg-4 py-2" style="margin-bottom:auto;">
        <img class="img-fluid bm-4" src="/img/Hacking/certificado6.png" alt="Certificado4" />
      </div>
      <div class="col-6 col-lg-4 py-2" style="margin-bottom:auto;">
        <img class="img-fluid bm-4" src="/img/Hacking/certificado7.png" alt="Certificado4" />
      </div>
    </div>
    <br />
    <br />
    
  </div>
</template>

<script>
import webcertificado from'./Certificacos/Web'
import appcertificado from './Certificacos/Aplicaciones'
export default {
  components:{webcertificado,appcertificado}
};
</script>