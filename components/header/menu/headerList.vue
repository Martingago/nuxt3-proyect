<template>
    <ul class="navbar-nav align-items-center align-items-lg-stretch gap-1">
        <li>
            <NuxtLink to="/" class="btn-navbar">Inicio</NuxtLink>
            <hr>
        </li>

        <li v-if="isAdmin">
            <NuxtLink to="/admin" class="btn-navbar">Admin</NuxtLink>
            <hr>
        </li>

        <li class="position-relative">
            <CategoryButton @mouseenter="submenuCategorias = true" @mouseleave="submenuCategorias = false">
            </CategoryButton>
            <CategoriasSubmenu v-if="submenuCategorias" @mouseenter="submenuCategorias = true"
                @mouseleave="submenuCategorias = false"></CategoriasSubmenu>
            <hr>
        </li>

        <li v-if="!userStore.auth" class="position-relative">
            <!-- Boton de login -->
            <LoginButon colorProp="white"></LoginButon>
        </li>
        <li v-else class="position-relative">
            <!-- boton cerrar sesion -->
            <MyAccount @mouseenter="submenuMyAccount = true" @mouseleave="submenuMyAccount = false"></MyAccount>
            <MyAccountSubmenu v-if="submenuMyAccount" @mouseenter="submenuMyAccount = true"
                @mouseleave="submenuMyAccount = false"></MyAccountSubmenu>
            <hr>
        </li>

        <li id="longBtnChart">

        </li>
    </ul>
</template>

<style scoped>


.btn-navbar{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 100%;
    border: 1px solid transparent;
    border-radius: 5px;
    transition: all .2s linear;
    color: white;
    font-size: 1.1rem;
}
.btn-navbar:hover{
    border:1px solid white;
    background-color: var(--color-dark);
}
hr{
    display: none;
}

</style>

<script setup>

import { useUserStore } from "~~/store/authUser";

const userStore = useUserStore();
const isAdmin = ref(false);

const submenuCategorias = ref(false); // muestra el submenu de las categorias
const submenuMyAccount = ref(false) // muestra el submenu de mi cuenta
</script>