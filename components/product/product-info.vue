<template>
    <article class="container d-flex flex-column">
        <div 
            class="producto-contenedor  mt-4  p-2 p-md-2 p-lg-5 d-flex  flex-md-row flex-column justify-content-around gap-3 gap-lg-5">
            <shop-item-carousel-item :productImages="props.product.imagenes_producto" class=" col-md-6 col-lg-5"></shop-item-carousel-item>
            <shop-item-data-item :dataProduct="props.product" class="col-md-6 col-lg-6"></shop-item-data-item>
        </div>
        <shop-item-propiedades :dataProduct="props.product.caracteristicas_articulo"></shop-item-propiedades>
    </article>
</template>

<script setup>

const props = defineProps({
    product: Object
})

console.log("props:", props.product);


</script>

<style scoped>
.producto-contenedor {
    height: 100%;

}
</style>

