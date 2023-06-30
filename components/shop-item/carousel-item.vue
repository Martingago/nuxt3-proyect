<template>
    
<div id="carouselExampleIndicators" class="carousel slide p-3" data-bs-ride="carousel">
    <div class="carousel-indicators my-0">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active bg-dark"
            aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class="bg-dark"
            aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" class="bg-dark"
            aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="@/assets/img/product/audiophile-altavoces-producto-marca.png" class="d-block w-100"
                alt="imagen de ejemplo">
        </div>
        <div class="carousel-item">
            <img src="@/assets/img/product/audiophile-auriculares-inalambricos-producto-marca.jpg"
                class="d-block w-100" alt="imagen de ejemplo">
        </div>
        <div class="carousel-item">
            <img src="@/assets/img/product/audiophile-cascos-inalambricos-producto-marca.png" class="d-block w-100"
                alt="imagen de ejemplo">
        </div>
    </div>
    <button class="carousel-control-prev btn-hover-color-dark" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="icon-carousel carousel-control-prev-icon rounded bg-dark m-3" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="icon-carousel carousel-control-next-icon rounded bg-dark m-3" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>

</template>

<style scoped>

    img {
    aspect-ratio: 1 /1;
}

button:hover{
    background-color: transparent;
    
}

</style>