<template>
    <section
        class="container d-flex  flex-md-nowrap my-5 flex-md-row flex-column align-items-between justify-content-between gap-4 p-0">

        <article class="d-flex flex-fill flex-grow-1 flex-column flex-fill justify-content-center align-items-center my-3 shadow rounded p-3 col-md-3">
            <NuxtLink class=" d-flex" to="/categoria/Auriculares">
                <img class="my-img m-auto img-fluid w-75" 
                title="Imagen de sección headphones | Tienda online Audiphile"
                src="@/assets/img/main-web/audiophile-cascos-inalambricos-producto-marca.webp" 
                loading="lazy"
                alt="Imagen de unos auriculares de marca AUDIOPHILE"/>
            </NuxtLink>
            <h2 class="mb-3">Auriculares</h2>
            <anchorVisit @mouseenter="activado($event)" @mouseleave="activado($event)" 
            btn_text="Ver categoría" navigate="/categoria/Auriculares"/>
        </article>

        <article class="d-flex flex-fill flex-grow-1 flex-column justify-content-center align-items-center my-3  shadow rounded p-3 col-md-3 ">
            <NuxtLink  class="d-flex" to="/categoria/Altavoces">
                <img class="my-img img-fluid w-75 m-auto"
                title="Imagen de sección altavoces | Tienda online Audiphile"
                 alt="Imagen de unos altavoces de marca AUDIOPHILE mejor calidad precio/sonido"
                 loading="lazy"
                 src="@/assets/img/main-web/audiophile-altavoces-producto-marca.webp"/>
            </NuxtLink>
            <h2 class="mb-3">Altavoces</h2>
            <anchorVisit @mouseenter="activado($event)" @mouseleave="activado($event)"
             btn_text="Ver categoría" navigate="/categoria/Altavoces"/>
        </article>
        
        <article class="d-flex flex-fill flex-grow-1 flex-column justify-content-center align-items-center my-3  shadow rounded p-3 col-md-3 ">
            <NuxtLink class="d-flex" to="/categoria/In-ear">
                <img class="my-img img-fluid w-75 m-auto"
                 title="Imagen de sección in-ear | Tienda online Audiphile"
                 alt="Auriculares in-ear marca AUDIOHPILE gran calidad auditiva"
                 loading="lazy"
                  src="@/assets/img/main-web/audiophile-auriculares-inalambricos-producto-marca.webp"/>
            </NuxtLink>
            <h2 class="mb-3">In-ear</h2>
            
            <anchorVisit @mouseenter="activado($event)" @mouseleave="activado($event)" 
            btn_text="Ver categoría" navigate="/categoria/In-ear"/>
        </article>

    </section>
</template>

<style scoped>
.my-img {
    aspect-ratio: 1 /1;    
    transition: transform 0.3s ease-out;
}

.my-img:hover {
    transform: translateY(-10px);
}

</style>
<script setup>

const activado = (event) => {
    const img = event.target.closest('article').querySelector('.my-img'); // Obtiene la imagen dentro del article
    img.style.transform = event.type === 'mouseenter' ? 'translateY(-10px)' : ''; // Mueve la imagen hacia arriba 10px si es 'mouseenter', sino vuelve a su posición original
}

</script>