<template>
  <!-- Carrito de la compra -->
  <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header position-relative">
      <button type="button" class="btn-close position-absolute" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      <h5 class="offcanvas-title w-100 text-center" id="offcanvasExampleLabel">Carrito de compra <font-awesome-icon
          :icon="['fas', 'cart-shopping']" /></h5>
    </div>

    <div class="offcanvas-body py-0 px-2">
      <section v-if="isAuth" class="container-user-chart h-100">
        <div class="d-flex flex-column gap-2">
          <div class="total-chart p-2 d-flex flex-column justify-content-center align-items-center">
            <p class="mb-1"><strong>Subtotal: 999€</strong></p>
            <button class="btn btn-warning">Tramitar pedido</button>
          </div>
        
          <article class="article-chart d-flex border border-1 rounded p-2 gap-3" v-for="item in carrito" :key="item.productID">
            <product-chart :id="item.productID" :count="item.count"></product-chart>
            <button class="m-auto btn btn-danger" @click="handleDeleteChart(item)">Eliminar</button>
          </article>
        </div>
        
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
const datoCarrito = ref([]);
watch(()=> userStore.info, (newVal)=> {
  if(newVal){
    console.log("se actualiza el carrito")
    carrito.value = newVal.user_chart;
    //leerDatosCarrito();
  }
},{inmediate: true});

const handleDeleteChart = async (item) => {
  item.count -=1;
  if(item.count === 0){
    const idRemove = item.productID
    carrito.value = carrito.value.filter(item => item.productID !== idRemove);
  }
  userStore.info.user_chart = carrito.value;
     //Actualizar los datos de firebase con el nuevo array:
     await updateDataAtribute(userStore.info.userID, userStore.info.user_chart);
}

</script>
<style scoped>

.offcanvas-body {
    overflow: auto;
    scrollbar-width: none; /* Para Firefox */
    -ms-overflow-style: none; /* Para Internet Explorer y Edge */
}

.offcanvas-body::-webkit-scrollbar {
    display: none; /* Para Chrome, Safari y Opera */
}
.total-chart{
  width: 100%;
  background-color: white;
  position: sticky;
  top: 0px;
}
.container-user-chart{
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr auto;
}

.article-chart{
  max-width: 100%;
  height: 230px;
  justify-items: center;
  align-items: center;
}



</style>