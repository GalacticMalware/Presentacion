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
  </div>
</template>

<script>
import tecview from './ExperienciasView/TecView'
import adminview from './ExperienciasView/AdminView'
import hackview from './ExperienciasView/HackView'
export default {
    components: {tecview,adminview,hackview}
};
</script>
