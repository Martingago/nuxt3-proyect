<template>
    <section class="speaker-section-product p-5 d-flex flex-column flex-lg-row rounded align-items-center justify-content-center gap-3">

        <div class="col-lg-6 d-flex justify-content-center align-items-center" >
            <img class="img-prod  col-10 col-lg-11 img-fluid" 
            title="Imagen de producto promocional: ZX9 speaker | Tienda online Audiphile"
             src="@/assets/img/main-web/audiophile-altavoces-producto-marca.webp" loading="lazy"
            alt="Altavoz AUDIOPHILE gran calidad de materiales y sonido"/>
        </div>

        <article class="item-article col-lg-4 col-md-8 d-flex flex-column justify-content-center align-items-md-center align-items-lg-start p-2 rounded">
            <h2 class="fw-bold fs-1 text-uppercase text-center text-lg-start">ZX9 <br>speaker </h2>
            <p class=" text-center text-lg-start fs-5">Mejora a los altavoces premium que son fenomenalmente construidos para entregar un sonido realmente
                remarcable</p>
            <button class="btn-product btn btn-dark fs-5 px-5 py-2 border-4">Ver producto</button>
        </article>
    </section>
</template>

<style scoped>

.speaker-section-product{
   background-color: var(--color-terciario);
}
.btn-product{
    width: fit-content;
}


@media screen and (min-width: 992px) {
    .img-prod{
    transform: translateY(10%);
}
    
}


</style>