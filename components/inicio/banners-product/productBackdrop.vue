<template>
    <section class="banner-speaker-product position-relative d-flex 
justify-content-center justify-content-md-start rounded" id="speaker">
        <article
            class="speaker-product p-3 p-md-5 d-flex align-items-center justify-content-center flex-column rounded  gap-3">
            <header class="mb-0">
                <h2 class=" fs-1 fw-bold text-uppercase">ZX7 speaker</h2>
                <anchorVisit btn_text="Ver producto" navigate="/productos/altavoz-muse-m692btc-bluetooth"
                    extra-class="fs-5 px-5 py-2 border-4" />
            </header>
        </article>
        <img class="image-bg position-absolute w-100 h-100 rounded"
            src="@/assets/img/main-web/large-audiophile-altavoces-producto-diseño-moderno.webp"
            alt="Imagen de un producto de la tienda Audiophile: Altavoz en un salón" title="Producto ZX7 en un salón">
    </section>
</template>

<style scoped>
.image-bg {
    top: 0;
    right: 0;
    z-index: -1;
    object-fit: cover;
    object-position: right;
    filter: grayscale(100%);
}

.banner-speaker-product {
    height: 350px;
}


@media screen and (max-width: 767px) {
    .speaker-product {
        width: 100%;
        background-color: rgba(246, 245, 245, 0.5);
        backdrop-filter: blur(1px);
    }

}
</style>