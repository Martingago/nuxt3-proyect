<template>
    <ul class="submenu-navbar">
        <li v-if="!storeCategorias.categorias.length">
            <Loading></Loading>
        </li>
        <li class="text-center" v-else v-for="categoria in storeCategorias.categorias" :key="categoria.id">
            <NuxtLink  :to="`/categoria/${categoria.nombre}`">{{ categoria.nombre }}</NuxtLink>
        </li>
    </ul>
</template>

<script setup>
import { useCategorias } from '~~/store/category';

//Inicializa el store de categorias
const storeCategorias = useCategorias();
//Al montar se obtiene los datos de las categorias || Si ya existia datos previos no se vuelven a cargar
onBeforeMount(async () => {
    await storeCategorias.initializeCategorias();
})

</script>

<style scoped>

.list-categorias li {
    text-align: center;
}
</style>