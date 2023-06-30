<template>
    <article class="container d-flex flex-column">
        <div
            class="producto-contenedor  mt-4  p-2 p-md-2 p-lg-5 d-flex  flex-md-row flex-column justify-content-around gap-3 gap-lg-5">
            <shop-item-carousel-item class=" col-md-6 col-lg-5"></shop-item-carousel-item>
            <shop-item-data-item class="col-md-6 col-lg-6"></shop-item-data-item>
        </div>

        <shop-item-propiedades></shop-item-propiedades>

    </article>
    <shop-item-galery-item></shop-item-galery-item>
    <carrousel-product-component></carrousel-product-component>
</template>

<script setup>

useHead({
    title: "Producto"

});
</script>

<style scoped>
.producto-contenedor {
    height: 100%;

}
</style>

