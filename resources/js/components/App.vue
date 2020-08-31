<template>
<div id="app" class="d-flex h-screen flex-column justify-content-between"> 
<navar></navar>
<router-view></router-view>
  <footer class="bg-white text-center text-black-50 py-3">Daniel Alejandro Morales Gomez</footer>
</div>
</template>

<script>
import navar from "./Nav";

export default {
  components: { navar },
};
</script>

