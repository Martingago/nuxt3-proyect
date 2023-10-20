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
    background-color: transparent;
    padding: 0;
    border: none;
    color: white;
    margin: auto;
}


@media screen and (min-width: 993px){
    .btn-element{
    width: 100%;
}
    .btn-element:hover{
    text-decoration: underline;
}
}


/* pequeñas resoluciones */
@media screen and (max-width: 992px) {
    .btn-element{
        font-size: 1rem;
        width: 200px;
        font-weight: 600;
        text-transform: uppercase;
    }
}

</style>