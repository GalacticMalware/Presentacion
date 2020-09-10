<template>
<div id="app" class="d-flex h-screen flex-column justify-content-between"> 
<div class=" navbar-fixed-top ">
<navar></navar>
</div>
<div class="expacion">
<router-view></router-view>
</div>
  <footer class="bg-white text-center text-black-50 py-3">Daniel Alejandro Morales Gómez</footer>
</div>
</template>

<script>
import navar from "./nav-vertical";

export default {
  components: { navar },
};
</script>

