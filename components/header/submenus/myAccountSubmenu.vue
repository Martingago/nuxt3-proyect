<template>
    <aside class="submenu-navbar">
        <ol>
            <li class="list-el-item text-center">
                <NuxtLink to="/">Mi cuenta</NuxtLink>
            </li>
            <li class="list-el-item text-center">
                <NuxtLink to="/">Pedidos</NuxtLink>
            </li>
            <li class="list-el-item text-center">
                <NuxtLink to="/">Devoluciones</NuxtLink>
            </li>
            <li class="list-el-item text-center">
                <LogOutButon></LogOutButon>
            </li>
        </ol>
    </aside>
</template>

<style scoped>
@media screen and (max-width: 991px) {
    .submenu-navbar{
        position: relative;
        background-color: transparent;
    }
    
}

</style>