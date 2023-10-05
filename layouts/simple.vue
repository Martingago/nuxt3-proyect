<template>
    <div class="main-container">
        <main>
            <NuxtPage/>
        </main>
        <FooterWeb></FooterWeb>
    </div>
</template>

<script setup>

</script>



<style scoped>
.main-container {
    display: grid;
    grid-template-rows: 1fr auto;
    min-height: calc(100vh);

}
</style>