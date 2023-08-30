<template>
    <button class="btn btn-primary" @click="disconnect">Cerrar sesión</button>
</template>

<script setup>

const disconnect = async () => {
    console.log("Cerrando sesion");
    const result = await signOutUser();
}

</script>