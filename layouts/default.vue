<template> 
        <HeaderWeb></HeaderWeb>
        <main class="main-container d-flex flex-column gap-3">
            <NuxtPage />
            <toast :message="modal.message"></toast>
        </main>
        <FooterWeb></FooterWeb>
</template>

<script setup>
import { useModalAlert } from '~~/store/openModal';
const modal = useModalAlert();

</script>
<style scoped>
.main-container {
    min-height: calc(100vh - var(--height-headerweb-lg));
}

@media screen and (max-width: 992px) {
    .main-container{
        min-height: calc(100vh - var(--height-headerweb-md)); 
    }
    
}

</style>