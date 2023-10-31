<template>
    <div class="container my-3">
        <welcome v-if="storeUsuario.auth" :userDetails="storeUsuario.info"></welcome>
        <div v-else>
            <h3 class="text-center">No has iniciado sesión</h3>
            <SubLogin></SubLogin>
        </div>
    </div>

</template>

<script setup>
import { useUserStore } from "~~/store/authUser";

const storeUsuario = useUserStore();

console.log(storeUsuario.auth)


</script>