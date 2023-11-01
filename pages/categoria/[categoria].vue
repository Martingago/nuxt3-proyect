<template>
    <header-container></header-container>
    <!-- Seccion de productos -->
    <section v-if="storeCategoria?.categoria_productos[categoria]?.length" class="productos-container  container my-4">
        <ProductView v-for="producto in storeCategoria.categoria_productos[categoria]" :key="producto.id" :datoProducto="producto">
        </ProductView>
    </section>
    <!-- loading -->
    <Loading v-else></Loading>
    <div></div>
</template>
<script setup>

import {storeProducts} from '@/store/productStore';

const {categoria } = useRoute().params;
const storeCategoria = storeProducts();
onMounted(async () => {
    const identificador = await getProductByAtribute("categoria_productos", "nombre", categoria);
    storeCategoria.fetchData(identificador);
})


</script>

<style scoped>
.productos-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    gap: .5rem;
    align-self: center;
    /* max-width: 1400px; */
}

@media screen and (max-width: 1109px) {
    .productos-container {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }

}

@media screen and (max-width: 680px) {
    .productos-container {
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    }
}
</style>