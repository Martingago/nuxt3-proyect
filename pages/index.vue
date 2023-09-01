<template>
        <headset></headset>
        <div class="container d-grid gap-4">
            <carrousel-product-component></carrousel-product-component>
            <speaker-banner-speaker></speaker-banner-speaker>
            <headphones-banner-product></headphones-banner-product>
            <hearhpones-hearphones></hearhpones-hearphones>
            <call-to-action></call-to-action> 
        </div>
  
</template>

<script setup>

// definePageMeta({
//   middleware: ["auth"]
//   // or middleware: 'auth'
// })

useHead(
    {
        title: "Home",
    }    
);

</script>
