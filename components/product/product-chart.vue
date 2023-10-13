<template>
    <div v-if="loading">cargando..</div>
    <div v-else class="container-product d-flex flex-column justify-content-center w-100 p-3 shadow rounded">
        <img class="img-fluid w-50 m-auto" :src="productData.imagenes_producto.portada.url" :alt='`imagen del producto ${productData.nombre_articulo}` '>
        
        <div class="chart-info d-flex justify-content-between gap-2 mb-2">
            <p class="d-flex mb-0 w-100 h-100">
                <strong class="d-flex justify-content-center align-items-center gap-2">Cant: 
                    <span class="count border border-1 rounded py-1 px-2">{{ count }}</span>
                </strong>
            </p>
            <p class="d-flex justify-content-end w-100 h-100 mb-0"><strong class="d-flex justify-content-end align-items-center">{{ productData.precio_venta }}€</strong></p>
        </div>
    </div>


</template>

<script setup>

const props = defineProps({
    id: String,
    count: Number
});

const totalProducto = ref(Number);
const loading = ref(true);
const productData = ref({});
onMounted(async ()=> {
    productData.value = await getSingleDocumentData("productos", props.id);
    loading.value = false;
    totalProducto.value = Number(productData.value.precio_venta) * props.count;
})


</script>
<style scoped>
.container-product{
    height: 207px;
}

.chart-info{
    height: 40px;
}

</style>