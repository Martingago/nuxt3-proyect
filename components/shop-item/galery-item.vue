<template>
    <div class="d-flex container m-auto p-0 gap-2 flex-column flex-md-row ">

        <figure class="col-sm-12 col-md-6">
            <img class="rounded img-fluid bg-dark" src="@/assets/img/call-to-action/banner-audiophile-auriculares-inalambricos.png"
                alt="persona con los auriculares colocados">
            <figcaption></figcaption>
        </figure>

        <div class="d-flex flex-column col-sm-12 col-md-6 sub gap-2">

            <figure class=" m-0">
                <img class="rounded" src="@/assets/img/call-to-action/persona-auriculares-colocados.png"
                    alt="persona con los auriculares colocados">
                <figcaption></figcaption>
            </figure>
            <figure class="">
                <img class="rounded " src="@/assets/img/call-to-action/persona-auriculares-colocados.png"
                    alt="persona con los auriculares colocados">
                <figcaption></figcaption>
            </figure>

        </div>
    </div>
</template>
  

<style scoped>

figcaption {
    display: none;
}


img {
    width: 100%;
    aspect-ratio: 1 / 1;
    height: 100%;
    background-size: cover;
    filter: grayscale(100%);
    background-size: cover;
    background-position: right;

}

.sub figure img{
    width: 100%;
    aspect-ratio: 2 / 1;
    object-fit: cover;
}

</style>