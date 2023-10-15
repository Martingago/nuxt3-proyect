<template>
    
    <section class="item-section-product d-flex flex-column flex-md-row gap-3">
        <div class="img-container col-md-6 rounded shadow d-flex align-items-center justif-content-center">
            <img class="hearphones-img-product m-auto p-lg-4 w-50 img-fluid" 
            title="Imagen de producto promocional: YX1 hearphones | Tienda online Audiphile"
            alt="imagen del estuche de unos auriculares in-ear YX1 hearhpones negros" 
            src="@/assets/img/main-web/auriculares-inalambricos-call-to-action-audiphile.webp"/>
        </div>
        <article class="hearphones-product d-flex flex-column justify-content-center align-items-center col-md-6 gap-3 rounded ">
            <h2 class="text-uppercase fw-bold fs-1">YX1 hearphones</h2>
            <button class="btn px-5 py-2 fs-5 border-4 btn-outline-dark" @click="pushToPath('/productos/yx1-hearphones')"><font-awesome-icon icon="fa-solid fa-chevron-right" /> Ver producto</button>
        </article>
        
    </section>

</template>

<style scoped>

.img-container + .hearphones-product{
    height: 350px;
}

.img-container{
    background: rgb(41, 41, 43);
    background: radial-gradient(circle, rgb(80, 80, 82) 41%, rgb(37, 37, 37) 100%);
}

</style>