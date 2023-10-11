<template>
    <div v-bind:style="{backgroundColor: backgroundColor, width: width}" class="submenu-iniciar-sesion d-flex flex-column gap-3 rounded p-3">
        <NuxtLink to="/login" class="btn btn-warning p-1">Identificarse</NuxtLink>
        <div class="d-flex flex-column justify-content-center align-items-center">
            <p v-bind:style="{ color: colorFont }" class="new-client-txt mb-0">¿Eres cliente nuevo?</p>
            <NuxtLink class="new-client-link" to="/users/createAccount">Crear cuenta </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    colorFont: String,
    width: Number,
    backgroundColor: String
})

</script>


<style scoped>
.new-client-txt,
.new-client-link {
    font-size: .9rem;
    color: rgb(29, 29, 29);
    text-align: center;
}

.new-client-link {
    color: rgb(0, 195, 255);
    text-decoration: underline !important;
}

.new-client-link:hover {
    color: rgb(255, 166, 0);
}
</style>