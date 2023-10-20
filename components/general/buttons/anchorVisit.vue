<template>
    <NuxtLink :class="`btn-component btn btn-outline-dark ${extraClass}`" :to="navigate">
        <font-awesome-icon class="animated-icon" icon="fa-solid fa-chevron-right" />
        {{ btn_text }}
    </NuxtLink>
</template>

<script setup>

const props = defineProps({
    btn_text: String,
    navigate: String,
    extraClass: String
})

</script>

<style scoped>

.btn-component:hover .animated-icon{
    animation: oscillate 1.5s infinite ease-in-out;
}

@keyframes oscillate {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
}



</style>