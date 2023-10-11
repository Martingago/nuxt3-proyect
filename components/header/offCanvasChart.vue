<template>
    <!-- Carrito de la compra -->
  <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header position-relative">
      <button type="button" class="btn-close position-absolute" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      <h5 class="offcanvas-title w-100 text-center" id="offcanvasExampleLabel">Carrito de compra <font-awesome-icon :icon="['fas', 'cart-shopping']" /></h5>
    </div>
    
    <div class="offcanvas-body">
        <section v-if="isAuth">
          <p>Te muestro tu carrito</p>
        </section>
        <div v-else class="d-flex flex-column justify-content-center ">
          <p>No has iniciado sesión</p>
          <ButtonsSubLogin ></ButtonsSubLogin>
        </div>
      </div>

  </div>
</template>

<script setup>

import { isAuth } from '~~/store/authUser';

</script>
<style scoped>

</style>