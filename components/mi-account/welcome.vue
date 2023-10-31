<template>
<section class=" border border-2 rounded p-3">
    <header>
        <h2 class="fs-1 text-center">Bienvenido de nuevo <span class=text-important>{{ userDetails?.user_name }}</span></h2>
        <div class="d-flex flex-column mb-3"> 
            <p class="mb-0">Direccion de email: {{ userDetails?.user_email }}</p>
            <p class="mb-0">Nombre: {{ userDetails?.user_name }}</p>

            <div class="d-flex gap-1 align-items-center">
                <label for="checkNotificaciones">Quiero recibir notificaciones por E-mail:</label>
                <input type="checkbox" :v-model="userDetails ? userDetails.accept_promotions : false" name="recibir-notificaciones" id="checkNotificaciones">

            </div>
        </div>
        <div class="d-flex flex-column justify-content-center align-items-center gap-2">
            <NuxtLink to="/mi-cuenta/pedidos" class="btn btn-dark w-100">Mis pedidos</NuxtLink>
            <button class="btn btn-out w-100" @click="disconnect">Cerrar sesión</button>
        </div>
    </header>
        
</section>
</template>

<script setup>

const props = defineProps({
    userDetails: Object
})

const disconnect = async () => {
    const result = await signOutUser();
}


</script>

<style scoped>

.text-important{
    color: var(--color-terciario)
}

.account-photo{
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: var(--color-terciario);
    color: white;
    font-weight: 600;
    font-size: 3.5rem;
    line-height: 3rem;
}

.btn-out{
    background-color: var(--color-terciario);
}


</style>