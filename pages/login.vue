<template>
        <div class="container h-100 w-fit d-flex flex-column p-3 p-md-5">

        
            <div v-if="!firebase">
                <login-emailLogin></login-emailLogin>
                <hr class="w-100">
                <p class="my-2 text-center">¿Aún no tienes cuenta?</p>
                <NuxtLink to="/users/createAccount" class="btn btn-warning w-100">Crear cuenta </NuxtLink>
            </div>
            <div v-else>
                <h3>Ya has inicado sesión</h3>
                <pre>{{ firebase }}</pre>
            </div>
        </div>
</template>


<script setup>

definePageMeta({
  
  // or middleware: 'auth'
})

definePageMeta({
    layout: "simple",
});

const login = await initUser();
const firebase = useFirebaseUser();

</script>

<style scoped>
.w-fit {
    width: fit-content;
}
</style>