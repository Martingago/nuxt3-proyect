<template>
    <aside class="submenu-navbar">
        <ol>
            <li>
                <NuxtLink class="btn-navbar-especial" to="/mi-cuenta" >Mi cuenta</NuxtLink>
                <LineSeparator/>
            </li>
            <li>
                <NuxtLink class="btn-navbar-sub" to="/mi-cuenta/pedidos">Pedidos</NuxtLink>
                <LineSeparator/>
            </li>
    
            <li>
                <LogOutButon></LogOutButon>
                <LineSeparator/>
            </li>
        </ol>
    </aside>
</template>
