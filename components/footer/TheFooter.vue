<template>
    <footer class="bg-dark text-white p-3 text-center">
        <p class="m-auto">Footer de la web - Martín gago 2021 - {{anoActual}}</p>
    </footer>
</template>

<script setup>

const anoActual = new Date().getFullYear();
</script>

<style scoped>



</style>