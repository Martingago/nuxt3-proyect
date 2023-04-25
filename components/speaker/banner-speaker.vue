<template>
    <section class="speaker-section-product p-5 d-flex flex-column flex-lg-row rounded align-items-center justify-content-center gap-3">

        <div class="col-lg-6 d-flex justify-content-center align-items-center" >
            <img class="img-prod  col-10 col-lg-11 img-fluid" src="@/assets/img/product/audiophile-altavoces-producto-marca.png" alt="imagen-producto-actavoz">
        </div>

        <article class="item-article col-lg-4 col-md-8 d-flex flex-column justify-content-center align-items-md-center align-items-lg-start p-2 rounded">
            <h2 class="fw-bold text-light fs-1 text-uppercase text-center text-lg-start">ZX9 <br>speaker </h2>
            <p class=" text-light text-center text-lg-start fs-5">Mejora a los altavoces premium que son fenomenalmente construidos para entregar un sonido realmente
                remarcable</p>
            <button class="btn-product btn btn-dark fs-5 px-5 py-2 border-4">Ver producto</button>
        </article>
    </section>
</template>

<style scoped>

.speaker-section-product{
   background-color: rgb(216, 124, 73)
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