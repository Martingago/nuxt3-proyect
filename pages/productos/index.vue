<template>
    <div class="container-index mx-5">
        <h1 class="text-center">Tienda Audiophile: Tu destino para el sonido de alta gama</h1>
        <h2 class="text-center">Descubre nuestra amplia gama de productos de audio premium</h2>
        <span>
            <h3 class="text-center txt-h3 mb-3">Explora nuestras categorías: Auriculares, Cascos, Altavoces y más</h3>
            <FiltersContainerFilter></FiltersContainerFilter>
        </span>
        <span>
            <h4 class="text-center">¡No te pierdas nuestras ofertas especiales y nuevos lanzamientos!</h4>
            <!-- <pre>{{ store.productos }}</pre> -->
                <div v-if="loading">
                    <p>Cargando...</p>
                </div>
            
                <section v-else id="productos-container" class="p-2">
                    <ProductArticleSelect v-for="producto in store.productos" :key="producto.id" :datoProducto="producto">
                    </ProductArticleSelect>
                </section>
        </span>
    </div>
</template>

<script setup>
import { storeProducts } from '@/store/productStore.js';

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

.container-index h1, .container-index h2 {
    grid-column: 1 / -1;
}
.container-index h4{
    font-size: 1.2rem;
}

.txt-h3{
    width: 240px;
    font-size: .9rem;
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