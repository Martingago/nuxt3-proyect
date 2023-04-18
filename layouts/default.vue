<template>
    <div class="main-container">
        <HeaderWeb></HeaderWeb>
        <main class="container">

            <slot />
        </main>
        <FooterWeb></FooterWeb>

    </div>
</template>

<script setup>
import FooterWeb from '~~/components/footer/FooterWeb.vue'
import HeaderWeb from '~~/components/header/HeaderWeb.vue';






useHead({
    titleTemplate: "%s - Intro a Nuxt",
    
}
);

</script>

<style scoped>
.main-container{
display: grid;
grid-template-rows: auto 1fr auto;
min-height: 100vh;

}
</style>