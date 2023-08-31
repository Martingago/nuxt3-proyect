<template>
    <div class="btn-container position-relative">
        <!-- Boton de iniciar sesion -->
        <button id="btn-login-user" type="button" class="btn btn-primary" @click="navigateTo('/login')" @mouseover="showPopOver = true"
            @mouseleave="showPopOver = false">Iniciar
            sesion
        </button>
        <!-- Submenu iniciar sesion/crear cuenta -->
        <div v-if="showPopOver" @mouseenter="showPopOver = true" @mouseleave="showPopOver = false"
            class="submenu-iniciar-sesion d-flex flex-column gap-3 position-absolute shadow rounded p-3">
            <NuxtLink to="/login" class="btn btn-warning p-1">Identificarse</NuxtLink>
            <div class="d-flex flex-column justify-content-center align-items-center">
                <p class="new-client-txt mb-0">¿Eres cliente nuevo?</p>
                <NuxtLink class="new-client-link" to="/users/createAccount">Crear cuenta </NuxtLink>
            </div>
        </div>
    </div>
</template>


<script setup>

const showPopOver = ref(false);

</script>

<style scoped>
.submenu-iniciar-sesion {
    width: 220px;
    background-color: rgb(32, 32, 32);
    right: 50%;
    transform: translateX(50%);
}

.new-client-txt,
.new-client-link {
    font-size: .9rem;
    color: rgb(29, 29, 29);
    text-align: center;
    color: white;
}

.new-client-link {
    color: rgb(0, 195, 255);
    text-decoration: underline !important;
}

.new-client-link:hover {
    color: rgb(255, 166, 0);
}
</style>