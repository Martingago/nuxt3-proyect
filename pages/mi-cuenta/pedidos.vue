<template>
    <section class="container my-3">
        <div v-if="storeUsuario.auth">
            <h1 class="text-center">Mis últimos pedidos</h1>
            <list-pedidos-realizados></list-pedidos-realizados>
        </div>
        <div v-else>

            <h3 class="text-center">No has iniciado sesión</h3>
            <SubLogin></SubLogin>
        </div>
    </section>
</template>

<script setup>
import { useUserStore } from '~~/store/authUser';

const storeUsuario = useUserStore();
</script>