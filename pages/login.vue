<template>
        <div class="container h-100 w-fit d-flex flex-column p-3 p-md-5">
                  
            <div> 
                <emailLogin></emailLogin>
                <hr class="w-100">
                <p class="my-2 text-center">¿Aún no tienes cuenta?</p>
                <NuxtLink to="/crear-cuenta" class="btn btn-warning w-100">Crear cuenta </NuxtLink>
            </div>
        </div>
</template>


<script setup>



definePageMeta({
    layout: "simple",
});

useHead(
    {
        title: "BRAVUS - Iniciar sesión",
        meta: [
            {
                name: 'description',
                content: 'BRAVUS: Página de inicio de sesión'
            }

        ]
    }    
);


</script>

<style scoped>
.w-fit {
    width: fit-content;
}
</style>