<template>
    <div class="p-2 text-center m-4 shadow rounded">
        <h2>Bienvenido al Post #{{ id }}</h2>
    </div>
</template>

<script setup>

const { id } = useRoute().params;
//Comprueba que el ID es el mismo que el de la ruta
definePageMeta({
    validate: async (route) => {
        const nuxtApp = useNuxtApp();
        return /^\d+$/.test(route.params.id);
    }
});


</script>