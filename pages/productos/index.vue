<template>
    <HeaderContainer></HeaderContainer>
    <div class="container-index  gap-2">

        <FiltersContainerFilter></FiltersContainerFilter>

        <div v-if="loading">
            <p>Cargando...</p>
        </div>

        <section v-else id="productos-container">
            <ProductArticleSelect v-for="producto in store.productos" :key="producto.id" :datoProducto="producto">
            </ProductArticleSelect>
        </section>

    </div>
</template>

<script setup>
import { storeProducts } from '@/store/productStore.js';
import HeaderContainer from '~~/components/call-to-action/header-container.vue';

useHead({
    title: "Audiophile | Productos de Alta Fidelidad para Amantes del Sonido",
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
onMounted(() => {
    loading.value = store.loading

})

getData();

</script>

<style scoped>
.container-index {
    display: grid;
    grid-template-columns: auto 1fr;
    width: 95%;
    margin: auto;
    max-width: 1600px;
}

#productos-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 240px);
    justify-content: center;
    align-self: center;
    gap: 1rem;
}


@media screen and (max-width: 1109px) {
    .container-index{
        grid-template-columns: 1fr;
    }
    #productos-container{
        grid-template-columns: repeat(auto-fill, 210px);
    }
}

@media screen and (max-width: 712px) {
    #productos-container{
        grid-template-columns: repeat(auto-fill, 180px);
    }
}

@media screen and (max-width: 420px) {
    #productos-container{
        grid-template-columns: repeat(auto-fill, 160px);
    }
    
}
</style>