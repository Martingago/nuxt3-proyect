<template>
    <aside v-if="userStore?.info?.user_chart.products_in_chart.length"
    class="container-list p-4 shadow rounded border border-2">
        <h3 class="mb-4">Datos del pedido</h3>
        <ul 
            class="justify-content-center justify-content-md-start d-flex flex-column gap-1">
            <li v-for="producto in userStore?.info?.user_chart.products_in_chart"
                :key="producto.productID">
                <ProductChart :item="producto" txt="Cantidad" container-direction="flex-row" subcontainer-direction="flex-row">
                </ProductChart>
            </li>
        </ul>
        <p  class="d-flex fs-5 shadow rounded justify-content-center align-items-center p-2 mb-0">
            <span class="flex-grow-1">Subtotal:</span> <span>1000€</span>
        </p>
    </aside>

    <div v-else>
        <p>No has añadido nada a tu carrito</p>
    </div>
</template>
<script setup>

import { useUserStore } from "~~/store/authUser";
const userStore = useUserStore();

</script>
<style scoped>
.container-list{
    max-width: 400px;
    width:100%;
}
</style>
