<template>
    <aside class="submenu-navbar">
        <ol>
            <li>
                <NuxtLink class="btn-navbar-especial" to="/" >Mi cuenta</NuxtLink>
                <LineSeparator/>
            </li>
            <li>
                <NuxtLink class="btn-navbar-sub" to="/">Pedidos</NuxtLink>
                <LineSeparator/>
            </li>
            <li>
                <NuxtLink class="btn-navbar-sub" to="/">Devoluciones</NuxtLink>
                <LineSeparator/>
            </li>
            <li>
                <LogOutButon></LogOutButon>
                <LineSeparator/>
            </li>
        </ol>
    </aside>
</template>
