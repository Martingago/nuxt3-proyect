<template>
    <div class="main-container">
        <HeaderWeb :userData = firebase></HeaderWeb>
        <main>
            <slot />
        </main>
        <FooterWeb></FooterWeb>
    </div>
</template>

<script setup>
const firebase = useFirebaseUser();

</script>

<style scoped>
.main-container {
    display: grid;
    grid-template-rows:1fr auto;
    margin-top: 150px;
    min-height: calc(100vh - 150px);

}
</style>