<template>
    <ul class="navbar-nav align-items-center pt-lg-0 pt-3 align-items-lg-stretch gap-lg-1">
        <li class="">
            <NuxtLink to="/" class="btn-navbar">Inicio</NuxtLink>
            <lineSeparator/>
        </li>

        <li v-if="isAdmin">
            <NuxtLink to="/admin" class="btn-navbar">Admin</NuxtLink>
            <lineSeparator/>
        </li>

        <li class="position-relative">
            <CategoryButton @mouseenter="submenuCategorias = true" @mouseleave="submenuCategorias = false">
            </CategoryButton>
            <lineSeparator/>
            <CategoriasSubmenu v-show="submenuCategorias || !isSmallScreen" @mouseenter="submenuCategorias = true"
                @mouseleave="submenuCategorias = false"></CategoriasSubmenu>
                
        </li>

        <li v-if="!userStore.auth" class="position-relative">
            <!-- Boton de login -->
            <LoginButon colorProp="white"></LoginButon>
        </li>
        <li v-else class="position-relative">
            <!-- boton cerrar sesion -->
            <MyAccount v-if="isSmallScreen" @mouseenter="submenuMyAccount = true" @mouseleave="submenuMyAccount = false"></MyAccount>
            <MyAccountSubmenu v-show="submenuMyAccount || !isSmallScreen" @mouseenter="submenuMyAccount = true"
                @mouseleave="submenuMyAccount = false"></MyAccountSubmenu>
        </li>

        <li id="longBtnChart">

        </li>
    </ul>
</template>

<script setup>




import { useUserStore } from "~~/store/authUser";
const userStore = useUserStore();
const isAdmin = ref(false);








const isSmallScreen = ref(false);
onMounted(async () => {
    updateWidth();
    window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
})

const updateWidth = () => {
    isSmallScreen.value = window.innerWidth > 991;
}

const submenuCategorias = ref(false); // muestra el submenu de las categorias
const submenuMyAccount = ref(false) // muestra el submenu de mi cuenta

</script>


