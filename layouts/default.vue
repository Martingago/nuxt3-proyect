<template>
    <div class="main-container">
        <HeaderWeb></HeaderWeb>
        <main>

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
    link: [
        {
            href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css",
            rel: "stylesheet",
            integrity: "sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ",
            crossorigin: "anonymous"
        }
    ],
    script: [
        {
            src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js",
            integrity: "sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE",
             crossorigin:"anonymous"
        },
        {
            src:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js",
             integrity:"sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ",
              crossorigin:"anonymous"
        }
    ]
}
);

</script>

<style scoped>
.main-container {
    display: grid;
    grid-template-rows:1fr auto;
    margin-top: 150px;
    min-height: calc(100vh - 150px);

}
</style>