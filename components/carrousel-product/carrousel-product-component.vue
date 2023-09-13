<template>
    <section
        class="container d-flex  flex-md-nowrap my-5 flex-md-row flex-column align-items-between justify-content-between gap-4 p-0">

        <article class="d-flex flex-fill flex-grow-1 flex-column flex-fill justify-content-center align-items-center my-3 shadow rounded p-3 col-md-3">
            <NuxtLink class=" d-flex" to="/">
                <img class="my-img m-auto img-fluid w-75" src="@/assets/img/product/audiophile-cascos-inalambricos-producto-marca.png">
            </NuxtLink>
            <h2>Headphones</h2>
            <button class="my-btn mt-3" @mouseenter="activado($event)" @mouseleave="activado($event)">Shop
                <font-awesome-icon icon="fa-solid fa-chevron-right" />
            </button>
        </article>

        <article class="d-flex flex-fill flex-grow-1 flex-column justify-content-center align-items-center my-3  shadow rounded p-3 col-md-3 ">
            <NuxtLink  class="d-flex" to="/">
                <img class="my-img img-fluid w-75 m-auto" src="@/assets/img/product/audiophile-altavoces-producto-marca.png">
            </NuxtLink>
            <h2>Speakers</h2>
            <button class="my-btn mt-3" @mouseenter="activado($event)" @mouseleave="activado($event)">Shop
                <font-awesome-icon icon="fa-solid fa-chevron-right" />
            </button>
        </article>
        
        <article class="d-flex flex-fill flex-grow-1 flex-column justify-content-center align-items-center my-3  shadow rounded p-3 col-md-3 ">
            <NuxtLink class="d-flex" to="/">
                <img class="my-img img-fluid w-75 m-auto" src="@/assets/img/product/audiophile-auriculares-inalambricos-producto-marca.jpg">
            </NuxtLink>
            <h2>Hearphones</h2>
            <button class="my-btn mt-3" @mouseenter="activado($event)" @mouseleave="activado($event)">Shop
                <font-awesome-icon icon="fa-solid fa-chevron-right" />
            </button>
        </article>

    </section>
</template>

<style scoped>
.my-img {
    aspect-ratio: 1 / 1;
    transition: transform 0.3s ease-out;
}

.my-img:hover {
    transform: translateY(-10px);
}

</style>
<script setup>

const activado = (event) => {
    const img = event.target.closest('article').querySelector('.my-img'); // Obtiene la imagen dentro del article
    img.style.transform = event.type === 'mouseenter' ? 'translateY(-10px)' : ''; // Mueve la imagen hacia arriba 10px si es 'mouseenter', sino vuelve a su posición original
}

</script>