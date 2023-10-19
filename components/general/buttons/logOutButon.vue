<template>
    <button class="btn-element" @click="disconnect">Cerrar sesión</button>
</template>

<script setup>

const disconnect = async () => {
    console.log("Cerrando sesion");
    const result = await signOutUser();
}
</script>

<style scoped>

.btn-element{
    width: 120px;
    background-color: transparent;
    padding: 0;
    border: none;
    color: white;
}

.btn-element:hover{
    text-decoration: underline;
}

@media screen and (max-width: 992px) {
    .btn-element{
        width: 100%;
    }
}

</style>