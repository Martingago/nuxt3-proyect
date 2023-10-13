<template>
  <!-- Carrito de la compra -->
  <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header position-relative">
      <button type="button" class="btn-close position-absolute" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      <h5 class="offcanvas-title w-100 text-center" id="offcanvasExampleLabel">Carrito de compra <font-awesome-icon
          :icon="['fas', 'cart-shopping']" /></h5>
    </div>

    <div class="offcanvas-body">
      <section v-if="isAuth" class="container-user-chart h-100">
        <div>
          <p>Te muestro tu carrito</p>
          <pre>{{ carrito.user_chart }}</pre>
        </div>
        <button class="btn btn-warning">Realizar pago</button>
      </section>
      <div v-else class="d-flex flex-column justify-content-center ">
        <p>No has iniciado sesión</p>
        <ButtonsSubLogin></ButtonsSubLogin>
      </div>
    </div>

  </div>
</template>

<script setup>

import { isAuth } from '~~/store/authUser';
import { useUserStore } from '~~/store/authUser';
const userStore = useUserStore();

const carrito = ref([]);
watch(()=> userStore.info, (newVal)=> {
  if(newVal){
    carrito.value = newVal
  }
},{inmediate: true})


</script>
<style scoped>
.container-user-chart{
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr auto;
}

</style>