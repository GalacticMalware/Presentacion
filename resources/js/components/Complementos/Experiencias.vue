<template>
  <div class="container">
      <tecview></tecview>
      <br />
      <br />
      <br />
      <adminview></adminview>
      <br />
      <br />
      <br />
      <hackview></hackview>
      <br />
      <br />
      <br />
      <redesview></redesview>
      <br />
      <br />
      <br />
      <aplicacionview></aplicacionview>
      <br />
      <br />
      <br />
      <javacview></javacview>
  </div>
</template>

<script>
import tecview from './ExperienciasView/TecView'
import adminview from './ExperienciasView/AdminView'
import hackview from './ExperienciasView/HackView'
import redesview from './ExperienciasView/Redesview'
import aplicacionview from './ExperienciasView/Aplicacionesview'
import javaview from './ExperienciasView/Java'
import javacview from './ExperienciasView/Java'
export default {
    components: {tecview,adminview,hackview,redesview,aplicacionview,javaview,javacview}
};
</script>
