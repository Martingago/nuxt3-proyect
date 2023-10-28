<template>
    <Loading v-if="loading"></Loading>

    <figure v-else :class="`item-chart d-flex justify-content-center mb-0 ${containerDirection}`">
        <div class="product-container d-flex flex-column justify-content-center p-1" title="Ver producto"
            @mouseenter="hover = true" @mouseleave="hover = false" :class="{ 'shadow rounded': hover }">
            <img class="img-product-chart img-fluid w-75 m-auto" :src="productData.imagenes_producto.portada.url"
                :alt='`imagen del producto ${productData.nombre_articulo}`'
                :title="`Producto añadido en el carrito: ${productData.nombre_articulo}`" loading="lazy">
        </div>
        <figcaption
            class="`count-details d-flex gap-1 flex-column justify-content-center align-items-center mx-2 my-1">

            <p class="w-100 mb-0">
                <strong>{{ productData.precio_venta }}€</strong>
            </p>

            <div :class="`d-flex gap-1 ${subcontainerDirection}`">
                <p class="d-flex gap-2 align-items-center mb-0">
                    {{txt }}:
                    <em class="count border border-1 rounded text-center">{{ item.count }}</em>
                </p>
                <button class="btn p-0 px-2 border border-1 rounded" @click="deleteProductFromChart(item)">
                    Eliminar
                </button>
            </div>
        </figcaption>
    </figure>
</template>

<script setup>
import Loading from '~~/components/general/loading.vue';
import { useUserStore } from '~~/store/authUser';
import { getSingleDocumentData } from '~~/composables/firebase';
const userStore = useUserStore();

const props = defineProps({
    item: Object,
    txt: String,
    containerDirection: String,
    subcontainerDirection: String
});

const totalProducto = ref(Number);
const loading = ref(true);
const hover = ref(false);

const productData = ref({}); //datos del producto
onMounted(async () => {
    productData.value = await getSingleDocumentData("productos", props.item.productID);
    loading.value = false;
    totalProducto.value = Number(productData.value.precio_venta) * props.item.count;
})



</script>
<style scoped>
.item-chart {
    width: 100%;
    max-width: 280px;
    user-select: none;
}

.count {
    width: 36px;
}

.img-product-chart {
    aspect-ratio: 1 /1;
}

.product-container {
    cursor: pointer;
}
</style>