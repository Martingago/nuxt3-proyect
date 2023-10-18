<template>
    <aside class="myaccount-submenu rounded">
        <ol class="list-items  rounded">
            <li class="list-el-item text-center">
                <NuxtLink class="w-100 text-center" to="/">Mi cuenta</NuxtLink>
            </li>
            <li class="list-el-item text-center">
                <NuxtLink class="w-100 text-center" to="/">Pedidos</NuxtLink>
            </li>
            <li class="list-el-item text-center">
                <NuxtLink class="w-100 text-center" to="/">Devoluciones</NuxtLink>
            </li>
            <li class="list-el-item text-center">
                <ButtonsLogOutButon></ButtonsLogOutButon>
            </li>
        </ol>
    </aside>
</template>

<style scoped>
.list-items {
    width: 200px;
    padding: .25rem;
    background-color: rgb(29, 29, 29);
    position: absolute;
    right: 50%;
    top: 100%;
    transform: translateX(50%);
}

.list-el-item{
    padding: .25rem .5rem;
    margin-bottom: .25rem;
}
.list-el-item a {
    color: white;
}

.list-items a:hover {
    text-decoration: underline !important;
}

@media screen and (max-width: 991px) {
    .list-items{
        position: relative;
        background-color: transparent;
    }
    
}

</style>