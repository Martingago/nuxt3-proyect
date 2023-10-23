<template>
    <section class="container gap-2">
        <loading v-if="!userStore?.loaded"></loading>
        <div v-else>
            <div v-if="userStore?.info?.user_chart.length">
                <ul class="justify-content-center justify-content-md-start d-flex flex-wrap gap-2">
                    <li class="item-chart rounded border border-2" v-for="producto in userStore?.info?.user_chart"
                        :key="producto.productID">
                        <ProductChart :item="producto"></ProductChart>
                    </li>
                </ul>
                
                    <p class="d-flex fs-5 shadow rounded justify-content-center align-items-center p-2 mb-0">
                        <span class="flex-grow-1">Subtotal:</span> <span>1000€</span>
                    </p>
                
            </div>
            <div v-else>
                <p>No has añadido nada a tu carrito</p>
            </div>
        </div>
    </section>
</template>
<script setup>
import { useUserStore } from "~~/store/authUser";

const userStore = useUserStore();

</script>

<style scoped>
.item-chart {
    width: 200px;
}
</style>