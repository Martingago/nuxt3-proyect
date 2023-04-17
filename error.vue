<template>
    <div>
        <h1>Error encontrado</h1>
        <h3>{{ error.statusCode }} - {{ error.statusMessage }}</h3>
        <button @click="handleError">Volver</button>

    </div>
</template>


<script setup>

const route = useRoute();

const { error } = defineProps({
    error: Object,

})

//Redigire al usuario a la ultima pagina, en caso de que no exista ultima pagina, redirige al home
const path = route.path === error.url ? "/" : route.path;


console.log(error);
const handleError = () => {
    clearError({redirect: path})
}


</script>