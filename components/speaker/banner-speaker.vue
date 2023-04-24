<template>
    <section class="speaker-section-product p-3 d-flex rounded">
        <article class="item-article d-flex flex-column justify-content-center p-3 rounded shadow">
            <h2 class="fw-bold fs-3">ZX9 <br>speaker </h2>
            <p class="fs-4">Mejora a los altavoces premium que son fenomenalmente construidos para entregar un sonido realmente
                remarcable</p>
            <button class="btn-product">Ver producto</button>
        </article>
    </section>
</template>

<style scoped>

.speaker-section-product{
    height: 350px;
    background-image: url(@/assets/img/call-to-action/altavoces.png);
    background-position: right;
    background-size: cover;
    filter: grayscale(100%);
    background-size: cover;
    background-position: right;
}

.item-article{
    background-color: rgba(216, 215, 215, 0.553);
    max-width: 400px;
}

.btn-product{
    width: fit-content !important;
}

</style>