<template>
    <div class="container d-flex justify-content-center align-items-center flex-column">
        <h3 class="text-center text-uppercase fs-1">Se ha producido un error</h3>
        <p class="text-center fs-2 mb-0">Código de error: {{ error.statusCode }}</p>
        <p class="text-center fs-2">{{ error.statusMessage }}</p>
        <NuxtLink class="btn btn-dark" to="/">Volver al inicio</NuxtLink>
    </div>
</template>

<script setup>

defineProps(['error'])

</script>

<style scoped>
    .container{
        height: 100vh;
    }
</style>