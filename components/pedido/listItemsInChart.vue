<template>
    <aside
    class="container-list shadow rounded border border-2">
        <h3 class="mb-4 pt-2 text-center text-uppercase">Datos del pedido</h3>
        <ul v-if="userStore?.info?.user_chart.products_in_chart.length"
            class="justify-content-center  m-4 justify-content-md-start d-flex flex-column gap-1">
            <li v-for="producto in userStore?.info?.user_chart.products_in_chart"
                :key="producto.productID">
                <ProductChart  :item="producto" txt="Cantidad" container-direction="flex-row" subcontainer-direction="flex-row">
                </ProductChart>
                <hr>
            </li>
        </ul>

        
        <p v-else class="text-center">No has añadido nada a tu carrito</p>
    
        <div class="total-price d-flex flex-column mx-2 pb-2">
            <p  class=" d-flex fs-5 justify-content-center align-items-center p-2 mb-0">
                <span class="flex-grow-1">Subtotal:</span> <span class="price">1000€</span>
            </p>
            <button :disabled="userStore?.info?.user_chart.products_in_chart.length === 0" class="btn btn-confirm m-2">Continuar y pagar</button>
        </div>
    </aside>

 
</template>
<script setup>

import { useUserStore } from "~~/store/authUser";
const userStore = useUserStore();

</script>
<style scoped>
.container-list{
    display: grid;
    grid-template-rows: auto 1fr auto;
    max-width: 400px;
    min-width: 350px;
    width:100%;
    height: 646.42px;
    overflow-y: scroll;
}

.container-list h3{
    background-color: white;
    position: sticky;
    top: 0;
    color: var(--color-terciario)
}

.total-price{
    position: sticky;
    bottom: 0;
    background-color: white;
}
.price{
    color: var(--color-terciario);
    font-weight: 600;
}

.btn-confirm{
    background-color: var(--color-terciario);
    font-weight: 600;
}

@media screen and  (max-width: 992px) {
    .container-list{
        max-width: none;
        height: auto;
        overflow: auto;
        min-width: auto;
    }
}


</style>
