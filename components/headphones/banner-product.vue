<template>
<section class="banner-speaker-product d-flex justify-content-center justify-content-md-start p-3 p-md-5 rounded" id="speaker">
    <article class="speaker-product d-flex align-items-center justify-content-center flex-column rounded  gap-3">
        <h2 class=" fs-1 fw-bold text-uppercase">ZX7 speaker</h2>
        <button class="btn btn-outline-dark border-3 py-2 px-3 fs-5 fw-bold"> <font-awesome-icon icon="fa-solid fa-chevron-right" /> Ver producto</button>
    </article>
</section>
</template>

<style scoped>
.banner-speaker-product{
    height: 350px;
    background-image: url('/assets/img/main-web/large-audiophile-altavoces-producto-diseño-moderno.webp');
    background-position: right;
    background-size: cover;
    filter: grayscale(100%);
    background-size: cover;
    background-position: right;
}


@media screen and (max-width: 767px) {
    .speaker-product{
        width: 100%;
        background-color: rgba(246, 245, 245, 0.629);
        backdrop-filter: blur(1px);
    }

}

</style>