<template>
<section class="banner-speaker-product d-flex justify-content-center justify-content-md-start p-5 rounded" id="speaker">
    <article class="speaker-product d-flex align-items-center justify-content-center flex-column rounded px-4 py-3 gap-3">
        <h2 class="fs-1 fw-bold text-uppercase">ZX7 speaker</h2>
        <button class="btn btn-outline-dark border-3 py-2 px-3 fs-5 fw-bold"> <font-awesome-icon icon="fa-solid fa-chevron-right" /> Ver producto</button>
    </article>
</section>
</template>

<style scoped>
.banner-speaker-product{
    height: 350px;
    background-image: url(@/assets/img/call-to-action/altavoces.png);
    background-position: right;
    background-size: cover;
    filter: grayscale(100%);
    background-size: cover;
    background-position: right;
}


@media screen and (max-width: 767px) {
    .speaker-product{
        background-color: rgba(246, 245, 245, 0.252);
        backdrop-filter: blur(1px);
    }
}

</style>