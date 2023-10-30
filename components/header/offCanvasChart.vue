<template>
  <!-- Carrito de la compra -->
  <section class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
    id="offcanvasChart" aria-labelledby="offcanvasExampleLabel">
    <!-- Header del carrito -->
    <header class="offcanvas-header infline-flex p-1">
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      <h5 class="offcanvas-title w-100 text-center" id="offcanvasExampleLabel">
        Carrito
      </h5>
    </header>
    <!-- Articulos -->
    <article class="offcanvas-body py-0 px-1">
      <div v-if="userStore.auth" class="container-user-chart">
   

        <!-- Listado ordenador de productos -->
        <ol class="container-item-chart mt-2 mx-0 my-0 p-0 rounded">
          <li class="article-chart d-flex flex-column border border-1 rounded mb-2" v-for="item in userStore?.info?.user_chart?.products_in_chart"
            :key="item.productID">
            <ProductChart :item="item" txt="cant" container-direction="flex-column" subcontainer-direction="flex-row"></ProductChart>
          </li>
        </ol>
        <aside class="total-chart  p-2 d-flex flex-column justify-content-center align-items-center">
          <p class="mb-1"><strong>Subtotal: {{ userStore?.info?.user_chart?.product_sum}}€</strong></p>
          <button class="btn btn-warning" data-bs-dismiss="offcanvas" aria-label="Close" :disabled="!userStore?.info?.user_chart?.products_in_chart.length" @click="tramitarPedido">Tramitar pedido</button>
        </aside>
      </div>
      <!-- Apartado notificacion -->
      <section v-else class="d-flex flex-column justify-content-center">
        <p>No has iniciado sesión</p>
        <SubLogin></SubLogin>
      </section>
    </article>
  </section>
</template>

<script setup>
import { useUserStore } from "~~/store/authUser";
const userStore = useUserStore();


const tramitarPedido = () => {
  pushToPath('/tramitar-pedido')
}



</script>
<style scoped>

/* Estructura de la lista */
.container-item-chart{
  height: calc(100vh - 130px);
  overflow: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.container-item-chart::-webkit-scrollbar {
  display: none;
} 

@media screen and (min-width: 992px) {
  .offcanvas {
  width: 180px;
}
  
}
</style>
