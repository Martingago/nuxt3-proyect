<template>
    <section
        class="container d-flex justify-content-center align-items-center  flex-md-nowrap flex-md-row flex-column my-3">

        <article class="d-flex flex-column justify-content-center align-items-center my-3 mx-2 shadow rounded p-3 col-lg-4">
            <NuxtLink to="/home">
                <img class="my-img img-fluid w-100" src="@/assets/img/product/audiophile-cascos-inalambricos-producto-marca.png">
            </NuxtLink>
            <h2>Headphones</h2>
            <button class="my-btn mt-3" @mouseenter="activado($event)" @mouseleave="activado($event)">Shop
                <font-awesome-icon icon="fa-solid fa-chevron-right" />
            </button>
        </article>

        <article class="d-flex flex-column justify-content-center align-items-center my-3 mx-2 shadow rounded p-3 col-lg-4 ">
            <NuxtLink to="/home">
                <img class="my-img img-fluid w-100" src="@/assets/img/product/audiophile-altavoces-producto-marca.png">
            </NuxtLink>
            <h2>Speakers</h2>
            <button class="my-btn mt-3" @mouseenter="activado($event)" @mouseleave="activado($event)">Shop
                <font-awesome-icon icon="fa-solid fa-chevron-right" />
            </button>
        </article>
        
        <article class="d-flex flex-column justify-content-center align-items-center my-3 mx-2 shadow rounded p-3 col-lg-4 ">
            <NuxtLink to="/home">
                <img class="my-img img-fluid w-100" src="@/assets/img/product/audiophile-auriculares-inalambricos-producto-marca.jpg">
            </NuxtLink>
            <h2>Headphones</h2>
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