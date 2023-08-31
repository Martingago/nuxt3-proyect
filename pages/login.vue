<template>
    <NuxtLayout>
        <div class="container h-100 w-fit d-flex flex-column p-3 p-md-5">

            <login-emailLogin></login-emailLogin>
            <hr class="w-100">
            <p class="my-2 text-center">¿Aún no tienes cuenta?</p>
            <NuxtLink to="/users/createAccount" class="btn btn-warning w-100">Crear cuenta </NuxtLink>
        </div>
    </NuxtLayout>
</template>


<script setup>
definePageMeta({
    layout: "simple",
});

</script>

<style scoped>
.w-fit {
    width: fit-content;
}
</style>