<template>
    <article class="container-product d-flex flex-column m-1 m-lg-2 m-xl-4 p-2 p-md-2 p-lg-3 shadow rounded">
        <div 
            class="producto-contenedor  d-flex  flex-lg-row flex-column justify-content-around gap-3 gap-lg-5">
            <shop-item-carousel-item :productImages="props.product.imagenes_producto" class=" col-md-8 col-lg-5"></shop-item-carousel-item>
            <shop-item-data-item :dataProduct="props.product" class="m-auto col-md-11 col-lg-6"></shop-item-data-item>
        </div>
        <shop-item-propiedades :dataProduct="props.product.caracteristicas_articulo"></shop-item-propiedades>
    </article>
</template>

<script setup>

const props = defineProps({
    product: Object
})

</script>

<style scoped>

.container-product{
    max-width: 1500px;
    margin: auto;
}
.producto-contenedor {
    height: 100%;

}
</style>

