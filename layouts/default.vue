<template>
    <div class="main-container">
        <TheHeader></TheHeader>
        <main class="container">

            <slot />
        </main>

        <TheFooter></TheFooter>

    </div>
</template>

<script setup>
import TheFooter from '@/components/footer/TheFooter.vue';
import TheHeader from '@/components/header/TheHeader.vue';




useHead({
    titleTemplate: "%s - Intro a Nuxt",
    bodyAttrs: [{
        
    }],
    link: [
        {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css",
            integrity: "sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ",
            crossorigin: "anonymous",
        },
    ],

    script: [
        {
            src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js",
        },
    ]
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