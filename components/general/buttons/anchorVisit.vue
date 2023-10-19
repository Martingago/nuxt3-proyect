<template>
    <NuxtLink class="btn px-3 py-2 border-3 btn-outline-dark" :to="navigate">
        
        <font-awesome-icon icon="fa-solid fa-chevron-right" />
        {{ btn_text }}
    </NuxtLink>
</template>

<script setup>

const props = defineProps({
    btn_text: String,
    navigate: String,
})
</script>