<template>
    <button class="btn btn-form" @click="disconnect">Cerrar sesión</button>
</template>

<script setup>

const disconnect = async () => {
    console.log("Cerrando sesion");
    const result = await signOutUser();
}
</script>

<style scoped>

.btn-form{
    width: 120px;
    background-color: transparent;
}

@media screen and (max-width: 992px) {
    .btn-form{
        width: 220px;
    }
}

</style>