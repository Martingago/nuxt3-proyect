<template>
    <div class="main-container">
        <main :userData = firebase>

            <slot />
        </main>
        <FooterWeb></FooterWeb>
    </div>
</template>

<script setup>

useHead({
    titleTemplate: "%s - Intro a Nuxt",
}
);
const login = await initUser();
const firebase = useFirebaseUser();

</script>



<style scoped>
.main-container {
    display: grid;
    grid-template-rows: 1fr auto;
    min-height: calc(100vh);

}
</style>