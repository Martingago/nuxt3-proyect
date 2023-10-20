<template>
    <div :class="`contenedor-loading d-flex flex-grow-1 flex-column justify-content-center align-items-center ${extraClass}`">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <p :class="`mb-0  ${extraClass}`">cargando</p>
    </div>

</template>

<script setup>

const props = defineProps({
    extraClass : String,
})
</script>