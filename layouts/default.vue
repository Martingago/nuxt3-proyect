<template>
    <div class="main-container">
        <HeaderWeb></HeaderWeb>
        <main>
            <NuxtPage />
        </main>
        <FooterWeb></FooterWeb>
    </div>
</template>

<script setup>
</script>

<style scoped>
.main-container {
    display: grid;
    grid-template-rows:1fr auto;
    margin-top: 150px;
    min-height: calc(100vh - 150px);

}
</style>