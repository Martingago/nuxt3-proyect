<template>
    <ul class="list-categorias rounded">
        <li v-if="!storeCategorias.categorias.length">
            <GeneralLoading></GeneralLoading>
        </li>
        <li v-else v-for="categoria in storeCategorias.categorias" :key="categoria.id">
            <NuxtLink :to="`/${categoria.nombre}`">{{ categoria.nombre }}</NuxtLink>
        </li>
    </ul>
</template>

<script setup>
import { useCategorias } from '~~/store/category';

//Inicializa el store de categorias
const storeCategorias = useCategorias();
//Al montar se obtiene los datos de las categorias || Si ya existia datos previos no se vuelven a cargar
onMounted(async () => {
    await storeCategorias.initializeCategorias();
})

</script>

<style scoped>
.list-categorias {
    top: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    padding: .5rem .75rem;
    width: 200px;
    background-color: var(--color-black);
    color: white;
}

.list-categorias li {
    text-align: center;
}
</style>