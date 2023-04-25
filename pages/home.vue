<template>
    <article class="producto-contenedor d-flex  flex-lg-row flex-column justify-content-center align-items-center gap-4">
        <shop-item-carousel-item class="col-4"></shop-item-carousel-item>
        <shop-item-data-item class="col-4"></shop-item-data-item>

    </article>
            
</template>

<script setup>

useHead({
    title: "Producto"

});
</script>

<style scoped>
.producto-contenedor{
    height: 100%;
   
}
</style>

