<template>
    <ul class="submenu-navbar">
        <li v-if="!storeCategorias.categorias.length">
            <Loading></Loading>
        </li>
        <li v-else v-for="categoria in storeCategorias.categorias" :key="categoria.id">
            <NuxtLink class="btn-navbar-sub"  :to="`/categoria/${categoria.nombre}`">{{ categoria.nombre }}</NuxtLink>
            <LineSeparator/>
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

