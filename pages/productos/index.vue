<template>
    <div class="container-index mx-5">
        <h1 class="text-center">Listado de productos</h1>

        <FiltersContainerFilter></FiltersContainerFilter>
        <!-- <pre>{{ store.productos }}</pre> -->
            <div v-if="loading">
                <p>Cargando...</p>
            </div>
            
            <section v-else id="productos-container" class="p-2">
                <ProductArticleSelect v-for="producto in store.productos" :key="producto.id" :datoProducto="producto">
                </ProductArticleSelect>
            </section>  
    </div>
</template>

<script setup>
import { storeProducts } from '@/store/productStore.js';

useHead({
    title: "Audiophile | Productos de Alta Fidelidad para Amantes del Sonido"
})


const store = storeProducts();
const loading = ref(true);
const getData = async () => {
    await store.getProductData("productos");
    loading.value = false;
}
onMounted(() => {
    loading.value = store.loading
    
})

getData();

</script>

<style scoped>

.container-index{
    display: grid;
    grid-template-columns: auto 1fr;
}

#productos-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 240px));
    justify-content: center;
    align-self: center;
    gap: 1rem;
}

.container-index h1 {
    grid-column: 1 / -1;
}

@media screen and (max-width: 767px) {
    #productos-container {
        grid-template-columns: repeat(auto-fill, minmax(200px, 230px));
    }
}

@media screen and (max-width: 500px) {
    #productos-container {
        grid-template-columns: repeat(auto-fill, minmax(150px, 170px));
        gap: .5rem
    }
}

@media screen and (max-width: 390px) {
    #productos-container {
        grid-template-columns: repeat(auto-fill, minmax(240px, 250px));
    }

}
</style>