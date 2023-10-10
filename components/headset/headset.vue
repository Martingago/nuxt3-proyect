<template>
    <section class="item-product-section p-0 bg-black d-flex justify-content-center w-100">
        <div class="container d-flex justify-content-center align-items-center gap-4 position-relative">

            <article class="item-article text-lg-start text-center col-lg-4 text-light">
                <h3>New product</h3>
                <h2 class="text-uppercase  fw-bold fs-1"> XX99 Mark II <br> Headphones</h2>
                <p class="mt-3 fs-5">Experiencia natural, sonido envolvente y una calidad de acabados excepcional hecho para los entusiastas pasionados de la música </p>
                <button class="btn-go-to-headset mt-3 fw-700">Ver producto</button>
            </article>

            <img class="img-article col-lg-4 img-fluid"
             alt="Imagen principal de los auriculares de maarca AUDIOPHILE" 
            src="@/assets/img/main-web/banner-audiophile-auriculares-inalambricos.webp"
            title="Imagen de portada de nuestra tienda en línea: Audiophile"/> 
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
    min-height: calc(100vh - var(--height-headerweb-lg));
    background: rgb(10, 10, 11);
    background: linear-gradient(126deg, rgba(10, 10, 11, 1) 0%, rgba(41, 43, 43, 1) 96%);
}

.btn-go-to-headset{
    background-color: var(--color-terciario);
    outline: none;
    border: none;
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--color-dark);
}


@media screen and (max-width: 992px) {
    .item-product-section{
        min-height: calc(100vh - var(--height-headerweb-md));
    }
    .img-article{
        position: absolute;
    }
}

</style>
