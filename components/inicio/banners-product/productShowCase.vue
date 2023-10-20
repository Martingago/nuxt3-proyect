<template>
    <section class="item-section-product d-flex flex-column flex-md-row">
        <figure class="img-container mb-0 col-md-6 rounded shadow d-flex align-items-center justif-content-center">
            <img class="hearphones-img-product m-auto p-lg-4 w-50 img-fluid"
                title="Imagen de producto promocional: YX1 hearphones | Tienda online Audiphile"
                alt="imagen del estuche de unos auriculares in-ear YX1 hearhpones negros"
                src="@/assets/img/main-web/auriculares-inalambricos-call-to-action-audiphile.webp" />
        </figure>
        <article
            class="hearphones-product d-flex flex-column justify-content-center align-items-center col-md-6 gap-3 rounded ">
            <h2 class="text-uppercase fw-bold fs-1">YX1 hearphones</h2>

            <anchorVisit btn_text="Ver producto" navigate="/productos/yx1-hearphones"
                extra-class="fs-5 px-5 py-2 border-4" />
        </article>

    </section>
</template>

<style scoped>
.img-container+.hearphones-product {
    height: 350px;
}

.img-container {
    background: rgb(41, 41, 43);
    background: radial-gradient(circle, rgb(80, 80, 82) 41%, rgb(37, 37, 37) 100%);
}
</style>