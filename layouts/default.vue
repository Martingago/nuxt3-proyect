<template>
    <div class="main-container">
        <HeaderWeb :userData = firebase></HeaderWeb>
        <main>

            <div v-if="firebase">Iniciada la sesion</div>
            <div v-else>Sesion sin iniciar</div>
            <slot />
        </main>
        <FooterWeb></FooterWeb>
    </div>
</template>

<script setup>
const login = await initUser();
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