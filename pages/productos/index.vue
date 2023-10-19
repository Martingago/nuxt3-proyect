<template>
    <HeaderContainer></HeaderContainer>
       
        <Loading v-if="loading"></Loading>
        <section v-else id="productos-container" class="mb-4 container">
            <ProductView v-for="producto in store.productos" :key="producto.id" :datoProducto="producto">
            </ProductView>
        </section>
</template>

<script setup>
import { storeProducts } from '@/store/productStore.js';
import HeaderContainer from '~~/components/inicio/header-container.vue';

useHead({
    title: "BRAVUS | Productos de Alta Fidelidad para Amantes del Sonido",
    meta: [{
        name: 'description',
        content: 'Descubre la excelencia en nuestra tienda online. Productos de alta calidad a precios competitivos. ¡Compra ahora, vive la diferencia y disfruta de nuestras ofertas exclusivas!'
    }]
})


const store = storeProducts();
const loading = ref(true);
const getData = async () => {
    await store.getProductData("productos");
    loading.value = false;
}

getData();

</script>

<style scoped>

#productos-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    gap: .5rem;
    width: 100%;
    align-self: center;
    margin: auto;
}

.loading-section{
    flex-grow: 1;
}


/* Cambio en los filtros */
@media screen and (max-width: 1109px) {
    .container-index{
        grid-template-columns: 1fr;
    }
    #productos-container{
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
    
}

@media screen and (max-width: 680px) {
    #productos-container{ 
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    }
}

</style>