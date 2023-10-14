<template>
  <!-- Carrito de la compra -->
  <section class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
    id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <!-- Header del carrito -->
    <header class="offcanvas-header infline-flex p-1">
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      <h5 class="offcanvas-title w-100 text-center" id="offcanvasExampleLabel">
        Carrito
      </h5>
    </header>
    <!-- Articulos -->
    <article class="offcanvas-body py-0 px-1">
      <div v-if="isAuth" class="container-user-chart h-100">
        <aside class="total-chart p-2 d-flex flex-column justify-content-center align-items-center">
          <p class="mb-1"><strong>Subtotal: 999€</strong></p>
          <button class="btn btn-warning">Tramitar pedido</button>
        </aside>

        <!-- Listado ordenador de productos -->
        <ol class="m-0 p-0">
          <li class="article-chart d-flex flex-column border border-1 rounded mb-2" v-for="item in carrito"
            :key="item.productID">
            <product-chart :item="item"></product-chart>
          </li>
        </ol>
      </div>
      <!-- Apartado notificacion -->
      <section v-else class="d-flex flex-column justify-content-center">
        <p>No has iniciado sesión</p>
        <ButtonsSubLogin></ButtonsSubLogin>
      </section>
    </article>
  </section>
</template>

<script setup>
import { isAuth } from "~~/store/authUser";
import { useUserStore } from "~~/store/authUser";
const userStore = useUserStore();
const carrito = ref([]);
watch(
  () => userStore.info ,
  (newVal) => {
    if (newVal) {
      carrito.value = newVal.user_chart;
    }
  },
  { inmediate: true }
);


</script>
<style scoped>


.offcanvas-body {
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.offcanvas-body::-webkit-scrollbar {
  display: none;
}

.offcanvas-header{
  background-color: lightgrey;
}

.total-chart {
  width: 100%;
  background-color: white;
  position: sticky;
  top: 0px;
}


@media screen and (min-width: 992px) {
  .offcanvas {
  width: 200px;
}
  
}
</style>
