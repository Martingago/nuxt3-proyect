<template>
    <section class="item-product-section p-0 bg-black d-flex justify-content-center">
        <div class="container d-flex justify-content-center align-items-center gap-4 position-relative">

            <article class="item-article text-lg-start text-center col-lg-4 text-light">
                <h3 class="">New product</h3>
                <h2 class="text-uppercase  fw-bold fs-1"> XX99 Mark II <br> Headphones</h2>
                <p class="mt-3 fs-5">Experiencia natural, sonido envolvente y una calidad de acabados excepcional hecho para los entusiastas pasionados de la música </p>
                <button class="btn-go-to-headset fs-5 mt-3 text-light">Ver producto</button>
            </article>

            <img class="img-article col-lg-4 img-fluid" src="@/assets/img/call-to-action/banner-audiophile-auriculares-inalambricos.png">
        </div>

    </section>

</template>

<style scoped>

.item-article{
    z-index: 1;
    max-width: 500px;
}
.item-product-section{
    overflow: hidden;
    min-height: calc(100vh - 150px);
    background: rgb(10, 10, 11);
    background: linear-gradient(126deg, rgba(10, 10, 11, 1) 0%, rgba(41, 43, 43, 1) 96%);
}

.btn-go-to-headset{
    background-color: rgb(230, 150, 75);
    outline: none;
    border: none;
}

@media screen and (max-width: 992px) {
    .img-article{
        position: absolute;
    }
}

</style>
